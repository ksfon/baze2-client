import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class URLHelper {
    public baseUrl = 'http://localhost:8080/';

    public loginClientRoute = this.baseUrl + 'loginClient'
    public addNewFlightRoute = this.baseUrl + 'addNewFlight'
    public generateNewSeatsRoute = this.baseUrl + 'generateNewSeats'
}
