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
    title = 'portfolio'
    top!: string
    left!: string
    isSideways: boolean = this.getIsSideways()

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.setTop()
        this.setLeft()
        this.cdr.detectChanges()
    }

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
        this.setTop()
        this.setLeft()
        this.cdr.detectChanges()
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

    setTop() {
        const height = window.innerHeight

        if (this.isSideways) {
            this.top = `${height / 2}px`
        } else {
            this.top = `${height - 200}px`
        }
    }

    setLeft() {
        const elem = document.getElementById('navbar')
        if (!elem) return
        const rect = elem.getBoundingClientRect()
        const elemWidth = rect.width
        const width = window.innerWidth
        if (this.isSideways) {
            this.left = `${width - elemWidth}px`
        } else {
            this.left = `${width / 2}px`
        }
    }
}
