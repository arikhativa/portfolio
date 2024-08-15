import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
type Product = {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
};

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    standalone: true,
    imports: [
        TableModule,
        DataViewModule,
        TagModule,
        RatingModule,
        ButtonModule,
        CommonModule,
    ],
})
export class IntroComponent {
    layout: "list" | "grid" = 'grid';


    products!: Product[];
    zIndex: any;

    getProducts(): Promise<Product[]> {
        return Promise.resolve([
            {
                id: '1',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '2',
                code: 'f230f00g0',
                name: 'YYY',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 665,
                category: 'Bis',
                quantity: 10,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '3',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '4',
                code: 'f230f00g0',
                name: 'YYY',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 665,
                category: 'Bis',
                quantity: 10,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '5',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '6',
                code: 'f230f00g0',
                name: 'YYY',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 665,
                category: 'Bis',
                quantity: 10,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '7',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '8',
                code: 'f230f00g0',
                name: 'YYY',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 665,
                category: 'Bis',
                quantity: 10,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
        ])
    }


    ngOnInit() {
        this.getProducts().then((data: any) => (this.products = data.slice(0, 12)));
    }

    filter() {
        this.products = this.products.filter((product) => product.id > '7');
    }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return 'contrast';
        }
    };
}