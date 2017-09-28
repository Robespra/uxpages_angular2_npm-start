import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from '../home/home.component';
import {convyComponent } from '../convy/convy.component';
import {mekaComponent } from '../meka/meka.component';
import {sharemosComponent } from '../sharemos/sharemos.component';
import {kelistoComponent } from '../kelisto/kelisto.component';
import {blogComponent } from '../blog/blog.component';
import {ErrorComponent } from '../error/error.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'convy',  component: convyComponent },
    { path: 'meka',  component: mekaComponent },
    { path: 'sharemos',  component: sharemosComponent },
    { path: 'kelisto',  component: kelistoComponent },
    { path: 'blog',  component: blogComponent },
    { path: '**', component: ErrorComponent }
];

export const myRouterProviders = [
    provideRouter(routes)
];   