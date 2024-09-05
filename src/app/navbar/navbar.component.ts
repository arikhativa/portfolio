import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
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
}
