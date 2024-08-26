import { ChangeDetectorRef, Component } from '@angular/core'
import { delayAppend } from '../misc/utils'
import { about } from '../misc/strings'

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {
    readonly strings = about
    header: string = ''
    text: string = ''
    _isReady: boolean = false
    index: number = 1

    get isReady(): boolean {
        return this._isReady
    }

    set isReady(value: boolean) {
        delayAppend(
            this.text,
            this.strings.cards[0].text,
            (s: string, isDone: boolean) => {
                this.text = s
                if (isDone) {
                    this.isReady = true
                }
            }
        )
    }

    ngAfterViewInit() {
        delayAppend(
            this.header,
            this.strings.cards[0].header,
            (s: string, isDone: boolean) => {
                this.header = s
                if (isDone) {
                    this.isReady = true
                }
            }
        )
    }
}
