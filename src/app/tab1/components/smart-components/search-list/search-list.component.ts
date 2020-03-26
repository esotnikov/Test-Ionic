import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../models/product.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  product$: Observable<Product[]>;
  id$: Observable<string>;

  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private storage: Storage
    ) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(param => {
      if(param.text) {
        this.searchProducts(param.text);
        this.setStorage(param.text);
      } else {
        this.getStorage();
      }
    });
  }

  setStorage(text) {
    this.storage.remove('searchText');
    this.storage.set('searchText', text);
  }

  getStorage() {
    this.storage.get('searchText').then((val) => {
      this.searchProducts(val)
    });
  }

  searchProducts(name) {
    this.product$ = this.productService.getSearchProducts(name);
  }
}
