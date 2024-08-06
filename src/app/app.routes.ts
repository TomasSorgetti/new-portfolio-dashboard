import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
];
