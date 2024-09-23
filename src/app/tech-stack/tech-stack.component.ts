import { Component } from '@angular/core'

@Component({
    selector: 'app-tech-stack',
    templateUrl: './tech-stack.component.html',
    styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
    readonly techStack = [
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
        'Git',
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
