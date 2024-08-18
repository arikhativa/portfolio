import { Component, ElementRef, Renderer2, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
})
export class BackgroundComponent {
  @ViewChild('tile') tile!: ElementRef<HTMLDivElement>;
  constructor(private hostElement: ElementRef<any>, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const host = this.hostElement.nativeElement;
    for (let i = 0; i < 10; i++) {
      host.appendChild(this.tile.nativeElement.cloneNode());
    }
  }
}
