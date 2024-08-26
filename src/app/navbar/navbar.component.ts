import { Component } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    activeIndex: number = 0

    setActive(i: number) {
        this.activeIndex = i
    }

    isActive(i: number) {
        return this.activeIndex === i
    }
}
