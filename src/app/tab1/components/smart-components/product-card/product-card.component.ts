import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../models/product.interface';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  product$: Product;
  productId: string;
  cardFrom: FormGroup;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");
    this.getProduct(this.productId);
    this.createForm();
  }

  createForm() {
    this.cardFrom = this.fb.group({
      amount: [''],
      quantity: ['']
    });
    this.cardFrom.controls.amount.valueChanges.subscribe(value => {
      const newVal = value / this.product$.price;
      this.cardFrom.controls.quantity.patchValue(newVal.toFixed(), { emitEvent: false });
    });
    this.cardFrom.controls.quantity.valueChanges.subscribe(value => {
      const newVal = this.product$.price * value;
      this.cardFrom.controls.amount.patchValue(newVal.toFixed(2), { emitEvent: false });
    });
  }

  getProduct(id) {
    this.productService.getProduct(id).subscribe(item => {
      if (item) {
        this.product$ = item[0];
      }
    });
  }

  addAmount(value: number) {
    this.cardFrom.patchValue({ amount: value }, { onlySelf: false, emitEvent: true });
  }

  addQuantity(value: number) {
    this.cardFrom.patchValue({ quantity: value }, { onlySelf: false, emitEvent: true });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
