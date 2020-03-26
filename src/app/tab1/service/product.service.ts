import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }

    url = '../../../assets/data.json';

    getProducts() {
        return this.http.get<Product>(this.url);
    }

    getProduct(name) {
        console.log(name);
        return this.http.get<Product>(this.url)
        .pipe(map((res: any) => {
            return res.filter(data => data.sku == name)
        }));
    }

    getSearchProducts(name) {
        console.log(name);
        return this.http.get<Product>(this.url)
        .pipe(map((res: any) => {
            return res.filter(data => data.name.toLowerCase().includes(name.toLowerCase()))
        }));
    }
}