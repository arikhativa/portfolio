import { Component, HostListener, Input } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    @Input() isSideways!: boolean
    activeIndex: number = 0
    routerLinks = ['/', '/about', '/projects', '/contact']

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter(
                    (event): event is NavigationEnd =>
                        event instanceof NavigationEnd
                )
            )
            .subscribe(this.setIndexViaURL)
    }

    setIndexViaURL = (event: NavigationEnd) => {
        this.activeIndex = this.routerLinks.indexOf(event.urlAfterRedirects)
    }

    setActive(i: number) {
        this.activeIndex = i
    }

    isActive(i: number) {
        return this.activeIndex === i
    }

    @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            this.navigateLeft()
        } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            this.navigateRight()
        }
    }

    navigateLeft() {
        if (this.activeIndex > 0) {
            this.activeIndex--
            this.router.navigate([this.routerLinks[this.activeIndex]], {
                state: { direction: 1 },
            })
        }
    }

    navigateRight() {
        if (this.activeIndex < this.routerLinks.length - 1) {
            this.activeIndex++
            this.router.navigate([this.routerLinks[this.activeIndex]], {
                state: { direction: -1 },
            })
        }
    }
}
