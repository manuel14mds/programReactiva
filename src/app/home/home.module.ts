import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { CharactersComponent } from './characters/characters.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    CharactersComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
