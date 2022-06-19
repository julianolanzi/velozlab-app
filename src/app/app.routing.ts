import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { EmBreveComponent } from './layouts/em-breve/em-breve.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'em-construcao',
    pathMatch: 'full', 
  },
  {
    path: '',
    component: EmBreveComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/em-breve/em-breve.module').then(m => m.EmBreveModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
