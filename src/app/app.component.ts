import { ChangeDetectorRef, Component, HostListener } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { animations } from './animations'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [animations],
})
export class AppComponent {
    isSideways: boolean = this.getIsSideways()

    constructor(private cdr: ChangeDetectorRef) {}

    @HostListener('@routeAnimations.done')
    onAnimationDone() {
        const url = window.location.href.split('/').pop()
        if (url === 'projects') {
            const a = document.querySelectorAll('.p-toggleable-content')
            a.forEach((el) => {
                el.classList.add('ready')
            })
        }
    }

    getRouteAnimationData(outlet: RouterOutlet) {
        if (!this.isDesktop()) return outlet.activatedRouteData['fadeIn']
        return outlet.activatedRouteData['animation']
    }

    @HostListener('window:resize', ['$event'])
    onResize(_event: Event) {
        this.isSideways = this.getIsSideways()
        this.cdr.detectChanges()
    }

    isDesktop() {
        return window.innerWidth > 1281
    }

    private getIsSideways(): boolean {
        // if (this.isDesktop()) return false
        if (window.innerWidth > window.innerHeight) {
            if (window.innerWidth < 600) return false
            return true
        }
        return false
    }
}
