export interface Color {
    fill: string
    stroke: string
    jump: boolean
}

export const fills: string[] = [
    '#3239ba',
    '#e3ce27',
    '#d88191',
    '#60cd95',
    '#bc2b2b',
]

export const strokes: string[] = [
    '#8389f0',
    '#f8ec8f',
    '#e5b3bc',
    '#a2e7c4',
    '#de6868',
]

export function getColorIndex(c: string): number {
    return fills.indexOf(c)
}

export function getNextFill(i: number): string {
    return fills[(i + 1) % fills.length]
}

export function getNextStroke(i: number): string {
    return strokes[(i + 1) % strokes.length]
}
