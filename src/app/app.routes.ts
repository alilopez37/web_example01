import { Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './jsonplaceholder/components/main/main.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ChartComponent } from 'chart.js';
import { authGuard } from './auth/auth.guard';
import { ChartsComponent } from './pages/charts/charts.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: CardComponent },
    { path: 'json', component: MainComponent, canActivate:[authGuard]},
    { path: 'chart', component: ChartsComponent},
    { path: '**', component: NotFoundPageComponent },
];
