import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { FlightReservationUserComponent } from './components/dashboard/flight-reservation-user/flight-reservation-user.component';
import { FlightReservationAdminComponent } from './components/dashboard/flight-reservation-admin/flight-reservation-admin.component';
import { AddFlightComponent } from './components/dashboard/add-flight/add-flight.component';
import { AllFlightsComponent } from './components/dashboard/all-flights/all-flights.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'add-flight', component: AddFlightComponent },
      { path: 'all-flights', component: AllFlightsComponent },
      { path: 'flightReservationUser', component: FlightReservationUserComponent },
      { path: 'flightReservationAdmin', component: FlightReservationAdminComponent },
      { path: 'navbar', component: AddFlightComponent },
      { path: '', component: AddFlightComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
