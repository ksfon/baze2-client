import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { FlightReservationUserComponent } from './components/dashboard/flight-reservation-user/flight-reservation-user.component';
import { FlightReservationAdminComponent } from './components/dashboard/flight-reservation-admin/flight-reservation-admin.component';
import { AddFlightComponent } from './components/dashboard/add-flight/add-flight.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    AddFlightComponent,
    FlightReservationUserComponent,
    FlightReservationAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
