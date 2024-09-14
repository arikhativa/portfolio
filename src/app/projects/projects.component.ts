import { Component, HostListener } from '@angular/core'
import { projects } from '../misc/strings'

export type Tab = {
    title: string
    content: string
    tech: string[]
}

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    tabs: Tab[] = projects.tabs
    activeIndex: number | null = null
}
