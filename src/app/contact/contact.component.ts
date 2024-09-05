import { Component } from '@angular/core'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent {
    readonly email = 'yoavar@protonmail.com'
    readonly file = 'Yoav-Rabby-CV.pdf'

    redirectToEmail(): void {
        window.location.href = `mailto:${this.email}`
    }

    downloadFile() {
        const link = document.createElement('a')
        link.href = 'assets/cv.pdf'
        link.target = '_self'
        link.download = this.file
        link.click()
    }
}
