import { Component, HostListener } from '@angular/core'
import { ChildrenOutletContexts } from '@angular/router'
import { slideInAnimation } from './animations'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [slideInAnimation],
})
export class AppComponent {
    title = 'portfolio'

    // TODO
    isSideways: boolean = false

    constructor(private contexts: ChildrenOutletContexts) {}

    // TODO This is been called too many time (should be only on project page)
    @HostListener('@routeAnimations.done')
    onAnimationDone() {
        const a = document.querySelectorAll('.p-toggleable-content')
        a.forEach((el) => {
            el.classList.add('ready')
        })
    }

    getRouteAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
            'animation'
        ]
    }
}
