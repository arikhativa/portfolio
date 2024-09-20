import { Injectable } from '@angular/core'
import { Card, CardMeta } from '../app/about/about.component'
import { YoavColors } from './yoav/yoav.component'
import { fills, strokes } from './misc/colorChange'
import { RabbyColors } from './rabby/rabby.component'

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

    private _yoav: YoavColors = {
        y: { fill: fills[0], stroke: strokes[0] },
        o: { fill: fills[0], stroke: strokes[0] },
        a: { fill: fills[0], stroke: strokes[0] },
        v: { fill: fills[0], stroke: strokes[0] },
    }

    set yoav(yoav: YoavColors) {
        this._yoav = yoav
    }

    get yoav(): YoavColors {
        return this._yoav
    }

    private _rabby: RabbyColors = {
        r: { fill: fills[0], stroke: strokes[0] },
        a: { fill: fills[0], stroke: strokes[0] },
        b0: { fill: fills[0], stroke: strokes[0] },
        b1: { fill: fills[0], stroke: strokes[0] },
        y: { fill: fills[0], stroke: strokes[0] },
    }

    set rabby(rabby: RabbyColors) {
        this._rabby = rabby
    }

    get rabby(): RabbyColors {
        return this._rabby
    }
}
