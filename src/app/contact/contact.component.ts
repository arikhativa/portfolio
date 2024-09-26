import { toolTip } from './../misc/strings'
import { Component } from '@angular/core'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent {
    readonly email = 'yoavar@protonmail.com'
    readonly file = 'Yoav-Rabby-CV.pdf'
    readonly pdfPath = 'assets/cv.pdf'
    readonly toolTip = toolTip

    visible: boolean = false

    showDialog() {
        this.visible = true
    }

    redirectToEmail(): void {
        window.location.href = `mailto:${this.email}`
    }

    downloadFile() {
        const link = document.createElement('a')
        link.href = this.pdfPath
        link.target = '_self'
        link.download = this.file
        link.click()
    }
}
