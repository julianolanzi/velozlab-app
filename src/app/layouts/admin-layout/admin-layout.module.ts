
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminRoutes } from './admin-layout.routing';

import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class AdminLayoutModule { }