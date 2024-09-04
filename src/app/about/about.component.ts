import { Component, QueryList, ViewChildren } from '@angular/core'
import { sleep } from '../misc/utils'
import { about } from '../misc/strings'
import { StoreService } from '../store.service'

export type Card = {
    header: string
    text: string
}

type CardKey = keyof Card

type Image = {
    src: string
    alt: string
}

export type CardMeta = {
    cardIndex: number
    type: CardKey
    textIndex: number
    done: boolean
}

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {
    readonly strings = about
    run!: boolean
    cards!: Card[]
    meta!: CardMeta
    leftImages: Image[] = []
    rightImages: Image[] = []

    constructor(private storeService: StoreService) {}

    ngOnInit(): void {
        this.cards = this.storeService.cards
        this.meta = this.storeService.cardMeta
        this.run = true
    }

    ngAfterViewInit() {
        if (!this.meta.done) this.writeAll()
    }

    async writeAll() {
        for (
            ;
            this.meta.cardIndex < this.strings.cards.length;
            ++this.meta.cardIndex
        ) {
            if (!this.run) return
            await this.writeCard(this.meta.cardIndex)
            if (!this.run) return
        }
        this.meta.done = true
    }

    async writeCard(i: number) {
        if (!this.run) return

        if (!this.cards[i]) {
            this.cards.push({
                header: '',
                text: '',
            })

            if (this.strings.cards[i].leftImg) {
                this.leftImages.push({
                    src: this.strings.cards[i].leftImg || '',
                    alt: '',
                })
            }

            this.meta.type = 'header'
            await this.delayAppend(this.strings.cards[i].header, i, 'header')
            await sleep(500)
            this.meta.type = 'text'
            await this.delayAppend(this.strings.cards[i].text, i, 'text')
        } else {
            if (this.meta.type === 'header') {
                await this.delayAppend(
                    this.strings.cards[i].header,
                    i,
                    'header'
                )
            }
            this.meta.type = 'text'
            await this.delayAppend(this.strings.cards[i].text, i, 'text')
        }
    }

    async delayAppend(s: string, index: number, type: CardKey): Promise<void> {
        for (; this.meta.textIndex < s.length; this.meta.textIndex++) {
            if (!this.run) return
            const delay = Math.random() * 60 + 20
            await sleep(delay)
            if (!this.run) return

            if ('\n' === s[this.meta.textIndex]) {
                this.cards[index][type] += '<br>'
            } else {
                this.cards[index][type] += s[this.meta.textIndex]
            }
        }
        this.meta.textIndex = 0
    }

    ngOnDestroy() {
        this.run = false
        this.storeService.cards = this.cards
        this.storeService.cardMeta = this.meta
    }

    skip() {
        this.run = false
        const c: Card[] = []
        this.strings.cards.forEach((card, i) => {
            c.push({
                header: card.header,
                text: card.text,
            })
        })
        this.cards = c
        this.meta.done = true
    }
}
