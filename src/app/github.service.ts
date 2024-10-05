import axios from 'axios'

type Files = {
    name: string
    type: 'file' | 'dir'
}

export class Github {
    readonly user = 'arikhativa'
    private _ls: Files[] = []
    repos: string[] = []
    repo: string = ''
    path: string = ''

    constructor() {
        this.fetchUserRepos()
    }

    get ls(): string[] {
        return this._ls.map((file) => file.name)
    }

    isFile(s: string): boolean {
        const foundElem = this._ls.find((file) => file.name === s)

        return !!foundElem && foundElem.type === 'file'
    }

    private async fetchUserRepos() {
        const ret = await axios.get(
            `https://api.github.com/users/${this.user}/repos`,
            {
                params: {
                    page: 1,
                    per_page: 100,
                },
            }
        )

        this.repos = ret.data.map((repo: any) => repo.name)
        this._ls = this.repos.map((repo) => ({ name: repo, type: 'dir' }))
    }

    private async fetchRepoFiles(repo: string, path: string): Promise<Files[]> {
        const ret = await axios.get(
            `https://api.github.com/repos/${this.user}/${repo}/contents/${path}`
        )

        return ret.data.map((file: any) => {
            return {
                name: file.name,
                type: file.type,
            }
        })
    }

    async setLS(newPath: string) {
        if (!this.repo) {
            this.rootFlow(newPath)
            return
        }

        if ('..' === newPath) {
            this.cutPath()
            if (!this.path) {
                this.repo = ''
                this._ls = this.repos.map((repo) => ({
                    name: repo,
                    type: 'dir',
                }))
            }
            return
        }

        if (!this.isFile(newPath)) {
            this.path += `${newPath}/`
            this._ls = await this.fetchRepoFiles(this.repo, this.path)
            return
        }
    }

    private cutPath() {
        const path = this.path.split('/')
        path.pop()
        this.path = path.join('/')
    }

    private async rootFlow(newPath: string) {
        if (this.repos.includes(newPath)) {
            this.repo = newPath
            this._ls = await this.fetchRepoFiles(newPath, '')
        }
    }
}
