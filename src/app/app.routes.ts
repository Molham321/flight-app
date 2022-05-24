import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router"

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'flight-edit/id:',
    component: FlightEditComponent
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

]