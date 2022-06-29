import { Routes } from '@angular/router';

import { AuthComponent } from 'src/app/pages/auth/auth.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

export const HomeRoutes: Routes = [
    { path: '',          component: HomeComponent },
    { path: 'home',          component: HomeComponent },
    { path: 'auth',          component: AuthComponent },
];
