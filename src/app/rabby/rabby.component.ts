import { Component, HostListener } from '@angular/core'
import {
    Color,
    getColorIndex,
    getNextFill,
    getNextStroke,
} from '../misc/colorChange'
import { StoreService } from '../store.service'

export interface RabbyColors {
    r: Color
    a: Color
    b0: Color
    b1: Color
    y: Color
}

@Component({
    selector: 'app-rabby',
    templateUrl: './rabby.component.html',
    styleUrl: './rabby.component.scss',
})
export class RabbyComponent {
    rabbyColors!: RabbyColors

    constructor(private storeService: StoreService) {}

    ngOnInit(): void {
        this.rabbyColors = this.storeService.rabby
    }

    ngOnDestroy() {
        this.storeService.rabby = this.rabbyColors
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent): void {
        event.preventDefault()
        const t = event.target as HTMLElement
        if (t && ['r', 'a', 'b0', 'b1', 'y'].includes(t.id)) {
            const entry = t.id as keyof RabbyColors

            const index = getColorIndex(this.rabbyColors[entry].fill)
            const fill = getNextFill(index)
            const stroke = getNextStroke(index)
            this.rabbyColors[entry].fill = fill
            this.rabbyColors[entry].stroke = stroke
        }
    }
}
