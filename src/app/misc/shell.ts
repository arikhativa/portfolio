import { Github } from '../github.service'

type CommandHandler = (gh: Github, cmd: string) => string

const ls: CommandHandler = (gh: Github, _cmd: string) => {
    return gh.ls.join(' ')
}

const cd: CommandHandler = (gh: Github, cmd: string) => {
    const param = cmd.split(' ')[1]
    if (gh.ls.includes(param) || '..' === param) {
        gh.setLS(param)
    }
    if (gh.isFile(param)) return `cd: not a directory: ${param}`
    return ''
}

const date: CommandHandler = (_gh: Github, _cmd: string) => {
    return new Date().toDateString()
}

export const cmdList = ['ls', 'date', 'cd']
export const handlerList = [ls, date, cd]
