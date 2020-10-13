import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CarCardComponent } from './car-card/car-card.component';
import { ItemHeaderComponent } from './item-header/item-header.component';
import { SharedPipesModule } from '@front/shared/pipes';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent }
    ]),
    MatPaginatorModule,
    MatCardModule,
    SharedPipesModule,
    MatIconModule,
    MatSnackBarModule
  ],
  declarations: [HomeComponent, CarCardComponent, ItemHeaderComponent],
  exports: [HomeComponent],
})
export class IbisDevFeaturePageHomeModule {}
