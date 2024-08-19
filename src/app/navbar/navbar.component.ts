import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    items: MenuItem[] | undefined;

    position: 'bottom' | 'top' | 'left' | 'right' = 'right';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom',
        },
        {
            label: 'Top',
            value: 'top',
        },
        {
            label: 'Left',
            value: 'left',
        },
        {
            label: 'Right',
            value: 'right',
        },
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
            },
            {
                label: 'App Store',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
            },
            {
                label: 'Photos',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
            },
            {
                label: 'Trash',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
            },
        ];
    }
}
