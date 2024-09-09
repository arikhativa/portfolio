import { Component } from '@angular/core'

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrl: './intro.component.scss',
})
export class IntroComponent {
    badges = [
        { text: 'Docker', icon: 'Docker' },
        { text: 'TypeScript', icon: 'TypeScript' },
        { text: 'Prisma', icon: 'Prisma' },
        { text: 'Linux', icon: 'Linux' },
    ]
}
