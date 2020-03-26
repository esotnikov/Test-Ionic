import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card-item',
  templateUrl: './list-card-item.component.html',
  styleUrls: ['./list-card-item.component.scss']
})
export class ListCardItemComponent implements OnInit {
  @Input() item;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getProduct(id) {
    this.router.navigate(['/tabs/tab1/product-info', id])
  }

}
