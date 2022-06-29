
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './home.routing';
import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { HomeComponent } from 'src/app/pages/home/home.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),

  ],
  declarations: [
    HomeComponent,
    AuthComponent,
  ]
})
export class HomeModule { }