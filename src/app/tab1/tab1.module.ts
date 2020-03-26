import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';
import { Tab1RoutingModule, routedComponents} from './tab1-routing.module';
import { DECLARATIONS } from './product.declarations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    HttpClientModule,
    Tab1RoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [...routedComponents, ...DECLARATIONS],
  providers: [ProductService]
})
export class Tab1PageModule {}
