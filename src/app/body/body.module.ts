import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from '../intro/intro.component';

@NgModule({
    declarations: [],
    imports: [CommonModule, IntroComponent],
    exports: [IntroComponent],
})
export class BodyModule {}
