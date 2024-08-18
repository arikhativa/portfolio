import { Component, ElementRef, Renderer2, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
})
export class BackgroundComponent {
  @ViewChild('con') con!: ElementRef<HTMLDivElement>;
  @ViewChild('tile') tile!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const host = this.con.nativeElement;
    for (let i = 0; i < 500; i++) {
      host.appendChild(this.tile.nativeElement.cloneNode());
    }
  }
}
