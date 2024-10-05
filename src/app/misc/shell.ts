export type CommandHandler = (cmd: string) => string

export const ls: CommandHandler = (cmd: string) => {
    return 'about  contact  projects  tech-stack'
}

export const date: CommandHandler = (cmd: string) => {
    return new Date().toDateString()
}

export const cmdList = ['ls', 'date']
export const handlerList = [ls, date]
