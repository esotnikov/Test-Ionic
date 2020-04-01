import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-btn-back',
  templateUrl: './btn-back.component.html',
  styleUrls: ['./btn-back.component.scss']
})
export class BtnBackComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  clickBack() {
    this.location.back();
  }
}
