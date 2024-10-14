import { Route } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './jsonplaceholder/components/main/main.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
export const routes: Route[] = [
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: CardComponent },
    { path: 'json', component: MainComponent },
    { path: '**', component: NotFoundPageComponent },
];
