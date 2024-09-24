import {
    animate,
    group,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations'

export const slideIn = trigger('routeAnimations', [
    transition('* => slideLeft', slideTo('left')),
    transition('* => slideRight', slideTo('right')),
    transition('slideRight  => *', slideTo('left')),
    transition('slideLeft  => *', slideTo('right')),
])

function slideTo(direction: string) {
    const optional = { optional: true }
    return [
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    [direction]: 0,
                    width: '100%',
                }),
            ],
            optional
        ),
        query(':enter', [style({ [direction]: '-10%' })]),
        group([
            query(':leave', [
                animate('300ms ease', style({ [direction]: '10%' })),
            ]),
            query(':enter', [
                animate('300ms ease', style({ [direction]: '0%' })),
            ]),
        ]),
    ]
}

export const fadeIn = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',

                opacity: '0',
            }),
        ]),
        query(':enter', [animate('300ms', style({ opacity: '1' }))]),
    ]),
])

export const slideInAnimation = trigger('routeAnimations', [
    transition(':increment', [
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
    ]),

    transition(':decrement', [
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
    ]),
])
