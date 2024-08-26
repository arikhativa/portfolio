export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function delayAppend(
    original: string,
    s: string,
    callback: (s: string, isDone: boolean) => void
): Promise<void> {
    for (let i = 0; i < s.length; i++) {
        const delay = Math.random() * 120 + 50
        await sleep(delay)
        original += s[i]
        callback(original, i === s.length - 1)
    }
}
