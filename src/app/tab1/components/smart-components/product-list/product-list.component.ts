import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../models/product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) {}

  product$: Observable<Product>;

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.product$ = this.productService.getProducts();
  }

}
