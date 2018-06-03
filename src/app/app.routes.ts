import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component'
import {MoviesComponent} from './movies/movies.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movie/:id', component: MoviesComponent}
];