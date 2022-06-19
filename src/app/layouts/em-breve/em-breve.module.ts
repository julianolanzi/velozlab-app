
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreveRoutes } from './em-breve.routing';

import { BreveComponent } from 'src/app/pages/breve/breve.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BreveRoutes),

  ],
  declarations: [
    BreveComponent,
  ]
})
export class EmBreveModule { }