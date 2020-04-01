import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ProductListComponent } from './components/smart-components/product-list/product-list.component';
import { SearchListComponent } from './components/smart-components/search-list/search-list.component';
import { ProductCardComponent } from './components/smart-components/product-card/product-card.component';


const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
        {
            path: '',
            component: ProductListComponent,
        },
        {
            path: 'serch-list',
            component: SearchListComponent
            
        },
        {
            path: 'product-info/:id',
            component: ProductCardComponent
            
        }
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class Tab1RoutingModule {}

export const routedComponents = [
    Tab1Page,
    ProductListComponent,
    SearchListComponent,
    ProductCardComponent,
  ];