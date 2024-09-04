import { Injectable } from '@angular/core'
import { Card, CardMeta } from '../app/about/about.component'

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    private _cardMeta: CardMeta = {
        cardIndex: 0,
        type: 'header',
        textIndex: 0,
        done: false,
    }

    set cardMeta(cm: CardMeta) {
        this._cardMeta = cm
    }

    get cardMeta(): CardMeta {
        return this._cardMeta
    }

    private _cards: Card[] = []

    set cards(cards: Card[]) {
        this._cards = cards
    }

    get cards(): Card[] {
        return this._cards
    }
}
