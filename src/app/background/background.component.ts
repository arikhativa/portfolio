import { CommonModule, DOCUMENT } from '@angular/common';
import {
    Component,
    ElementRef,
    Inject,
    numberAttribute,
    Renderer2,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-background',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './background.component.html',
    styleUrl: './background.component.scss',
})
export class BackgroundComponent {
    counter = 0;
    readonly COLORS = [
        '#F87171', // red
        '#38BDF8', // blue
        '#4ADE80', // green
        '#FDE047', // yellow
    ];

    rows: number[] = [];
    items: number[] = [];
    background: string = 'rgb(255 255 255 / 25%)';

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // TODO
        // const aaValue = getComputedStyle(
        //     this.el.nativeElement
        // ).getPropertyValue('--aa');
        // console.log(aaValue);

        const len = 100; // TODO maybe too much
        this.rows = generateRandomNumbers(len, 100);
        this.items = generateRandomNumbers(len, 100);
    }

    changeBackgroundColor(event: MouseEvent, row: number, col: number) {
        const randomColor = this.getColor(row, col);
        if (event.target instanceof HTMLElement)
            event.target.style.backgroundColor = randomColor;
    }

    resetBackgroundColor(event: MouseEvent) {
        if (event.target instanceof HTMLElement)
            event.target.style.backgroundColor = this.background;
    }

    getColor(row: number, col: number): string {
        const color = this.COLORS[(row + col) % this.COLORS.length];
        return color;
    }
}

function generateRandomNumbers(length: number, max: number): number[] {
    const randomNumbers: number[] = [];
    for (let i = 0; i < length; i++) {
        randomNumbers.push(Math.floor(Math.random() * max));
    }
    return randomNumbers;
}
