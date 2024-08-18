import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
})
export class BackgroundComponent {

  lines: string[] = [];
  items: string[] = [];
  background: string = 'rgb(255 255 255 / 25%)';

  ngOnInit() {
    const i = 30
    this.lines = Array(i);
    this.items = Array(i);
  }

  changeBackgroundColor(event: any) {
    const randomColor = this.getRandomColor();
    event.target.style.backgroundColor = randomColor;
  }

  resetBackgroundColor(event: any) {
    event.target.style.backgroundColor = this.background;
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
