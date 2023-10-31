import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
