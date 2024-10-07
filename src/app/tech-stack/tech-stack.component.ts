import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-tech-stack',
    templateUrl: './tech-stack.component.html',
    styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
    @Input() goLeft = true

    readonly techLeftStack = [
        'Angular',
        'TypeScript',
        'Node.js',
        'C',
        'C++',
        'Python',
        'goLang',
        'Docker',
        'PostgreSQL',
        'Elasticsearch',
        'Logstash',
        'Kibana',
    ]

    readonly techRightStack = [
        'CI/CD',
        'Prisma',
        'GraphQL',
        'React Native',
        'Vue.js',
        'gRPC',
        'Prometheus',
        'Grafana',
        'GithubPages',
        'Nginx',
    ]
}
