import {
    animate,
    group,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations'

export const animations = trigger('routeAnimations', [
    transition('* <=> a', getFadeIn()),
    transition('* <=> b', getFadeIn()),
    transition('* <=> c', getFadeIn()),
    transition('* <=> d', getFadeIn()),
    transition(':increment', slideAnimationInc()),
    transition(':decrement', slideAnimationDec()),
])

function getFadeIn() {
    return [
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',

                    opacity: '0',
                }),
            ],
            { optional: true }
        ),
        query(':enter', [animate('300ms', style({ opacity: '1' }))], {
            optional: true,
        }),
    ]
}

function slideAnimationInc() {
    return [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }),
            ],
            { optional: true }
        ),
        query(':enter', [style({ left: '100%' })], { optional: true }),
        group([
            query(
                ':leave',
                [
                    animate(
                        '300ms ease-in-out',
                        style({ left: '-100%', opacity: 0 })
                    ),
                ],
                { optional: true }
            ),
            query(
                ':enter',
                [animate('300ms ease-in-out', style({ left: '0%' }))],
                { optional: true }
            ),
        ]),
    ]
}

function slideAnimationDec() {
    return [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }),
            ],
            { optional: true }
        ),
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        group([
            query(
                ':leave',
                [
                    animate(
                        '300ms ease-in-out',
                        style({ left: '100%', opacity: 0 })
                    ),
                ],
                { optional: true }
            ),
            query(
                ':enter',
                [animate('300ms ease-in-out', style({ left: '0%' }))],
                { optional: true }
            ),
        ]),
    ]
}
