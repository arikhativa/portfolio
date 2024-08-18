import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

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

  ngOnInit() {
    const i = 35
    this.lines = Array(i);
    this.items = Array(i);
  }

}
