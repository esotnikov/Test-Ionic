import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  constructor(
    private router: Router
    ) {}

  ngOnInit() {
  }

  getSearch(scr) {
    this.router.navigate(['/tabs/tab1/serch-list'], { queryParams: { text: scr} })
  }

}
