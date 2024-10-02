import { Component } from '@angular/core'
import { getColorIndex, getNextFill } from '../misc/colorChange'

export interface YoavRabbyColors {
    y: string
    o: string
    a: string
    v: string
}

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrl: './intro.component.scss',
})
export class IntroComponent {
    lettersColors!: YoavRabbyColors

    onMouseDown(event: MouseEvent): void {
        event.preventDefault()
        const t = event.target as HTMLElement
        if (t && ['y', 'o', 'a', 'v'].includes(t.id)) {
            const entry = t.id as keyof YoavRabbyColors

            const index = getColorIndex(this.lettersColors[entry])
            const fill = getNextFill(index)
            // const stroke = getNextStroke(index)
            this.lettersColors[entry] = fill
            // this.lettersColors[entry].stroke = stroke
        }
    }
}
