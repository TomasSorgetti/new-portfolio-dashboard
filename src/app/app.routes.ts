import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutUpdateComponent } from './pages/about-update/about-update.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about-update', component: AboutUpdateComponent },
];
