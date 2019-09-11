import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class URLHelper {
    public baseUrl = 'http://localhost:8080/';

    public loginClientRoute = this.baseUrl + 'loginClient'
    public addNewFlightRoute = this.baseUrl + 'addNewFlight'
    public generateNewSeatsRoute = this.baseUrl + 'generateNewSeats'
    public getSeatsAndExtraServicesRoute = this.baseUrl + 'getSeatsAndExtraServices'
    public getFlightsRoute = this.baseUrl + 'getFlights'
    public addNewReservationRoute = this.baseUrl + 'addNewReservation';
    public addNewPassengerRoute = this.baseUrl + 'addNewPassenger';
    public passengerSitsRoute = this.baseUrl + 'passengerSits';
    public addNewPaymentCardRoute = this.baseUrl + 'addNewPaymentCard';
    public addNewPaymentRoute = this.baseUrl + 'addNewPayment';
}
