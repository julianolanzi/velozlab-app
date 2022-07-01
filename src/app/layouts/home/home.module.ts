import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutes } from './home.routing';
import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RegisterService } from 'src/app/services/register.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  declarations: [
    HomeComponent,
    AuthComponent,
  ],
  providers: [
    RegisterService,
  ],
})
export class HomeModule { }