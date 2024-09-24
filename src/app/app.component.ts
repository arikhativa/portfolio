import { Component, HostBinding, HostListener } from '@angular/core'
import { ChildrenOutletContexts, Route, RouterOutlet } from '@angular/router'
import { fadeIn, slideIn, slideInAnimation } from './animations'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [slideInAnimation],
})
export class AppComponent {
    title = 'portfolio'

    // TODO
    isSideways: boolean = this.getIsSideways()

    // TODO This is been called too many time (should be only on project page)
    @HostListener('@routeAnimations.done')
    onAnimationDone() {
        const a = document.querySelectorAll('.p-toggleable-content')
        a.forEach((el) => {
            el.classList.add('ready')
        })
    }

    getRouteAnimationData(outlet: RouterOutlet) {
        return outlet.activatedRouteData['animation']
    }

    @HostListener('window:resize', ['$event'])
    onResize(_event: Event) {
        this.isSideways = this.getIsSideways()
    }

    isDesktop() {
        return window.innerWidth > 1281
    }

    private getIsSideways(): boolean {
        if (this.isDesktop()) return false
        if (window.innerWidth > window.innerHeight) {
            if (window.innerWidth < 600) return false
            return true
        }
        return false
    }

    get top(): string {
        const height = window.innerHeight

        if (this.isSideways) {
            return `${height / 2}px`
        }

        return `${height - 200}px`
    }

    get left(): string {
        const elem = document.getElementById('navbar')
        if (!elem) return '0px'
        const rect = elem.getBoundingClientRect()
        const elemWidth = rect.width
        const width = window.innerWidth
        if (this.isSideways) {
            return `${width - elemWidth}px`
        }
        return `${width / 2}px`
    }
}
