import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from '../intro/intro.component';
import { BackgroundComponent } from '../background/background.component';

@NgModule({
    declarations: [],
    imports: [CommonModule, IntroComponent, BackgroundComponent],
    exports: [IntroComponent, BackgroundComponent],
})
export class BodyModule { }
