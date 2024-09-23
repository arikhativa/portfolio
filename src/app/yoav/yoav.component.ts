import { Component, HostListener } from '@angular/core'
import {
    Color,
    getColorIndex,
    getNextFill,
    getNextStroke,
} from '../misc/colorChange'
import { StoreService } from '../store.service'

export interface YoavColors {
    y: Color
    o: Color
    a: Color
    v: Color
}

@Component({
    selector: 'app-yoav',
    templateUrl: './yoav.component.html',
    styleUrl: './yoav.component.scss',
})
export class YoavComponent {
    yoavColors!: YoavColors

    constructor(private storeService: StoreService) {}

    ngOnInit(): void {
        this.yoavColors = this.storeService.yoav
    }

    ngOnDestroy() {
        this.storeService.yoav = this.yoavColors
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent): void {
        event.preventDefault()
        const t = event.target as HTMLElement
        if (t && ['y', 'o', 'a', 'v'].includes(t.id)) {
            const entry = t.id as keyof YoavColors

            const index = getColorIndex(this.yoavColors[entry].fill)
            const fill = getNextFill(index)
            const stroke = getNextStroke(index)
            this.yoavColors[entry].fill = fill
            this.yoavColors[entry].stroke = stroke
        }
    }
}
