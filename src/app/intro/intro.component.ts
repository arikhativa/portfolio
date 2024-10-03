import { Component } from '@angular/core'
import {
    Color,
    getColorIndex,
    getNextFill,
    getNextStroke,
} from '../misc/colorChange'
import { StoreService } from '../store.service'

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrl: './intro.component.scss',
})
export class IntroComponent {
    color!: Color
    constructor(private storeService: StoreService) {}

    ngOnInit(): void {
        this.color = this.storeService.introColor
    }

    ngOnDestroy() {
        this.storeService.introColor = this.color
    }

    ChangeColor(): void {
        const index = getColorIndex(this.color.fill)
        const fill = getNextFill(index)
        const stroke = getNextStroke(index)
        this.color.fill = fill
        this.color.stroke = stroke
    }
}
