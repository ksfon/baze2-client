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
import { AllFlightsComponent } from './components/dashboard/all-flights/all-flights.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BookAFlightComponent } from './components/dashboard/book-a-flight/book-a-flight.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ResponseInterceptor } from './interceptors/Response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    AddFlightComponent,
    FlightReservationUserComponent,
    FlightReservationAdminComponent,
    AllFlightsComponent,
    RegistrationComponent,
    BookAFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
