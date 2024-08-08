import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutUpdateComponent } from './pages/about-update/about-update.component';
import { AddNewProjectComponent } from './pages/add-new-project/add-new-project.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about-update', component: AboutUpdateComponent },
    { path: 'add-new-project', component: AddNewProjectComponent },
    
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
