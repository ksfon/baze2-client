import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLHelper } from './url-helpers/routes.constants';


@Injectable({
    providedIn: 'root'
})

export class CallBroker {
    constructor(private httpClient: HttpClient, private urlHelper: URLHelper) { }

    login(username: string, password: string) {
        const headers = new HttpHeaders();

        headers.append('Content-Type', 'application/json');

        const data = {
            username: username,
            password: password
        };

        return this.httpClient.post(this.urlHelper.loginClientRoute, data, {headers: headers});
    }

    addFlight(airplane_id: string, country_from_id: string,country_to_id, city_from_id, city_to_id, timestamp_from, timestamp_to, flightCategories) {
        const headers = new HttpHeaders();

        headers.append('Content-Type', 'application/json');

        const data = {
            airplane_id: airplane_id,
            country_from_id: country_from_id,
            country_to_id: country_to_id,
            city_from_id: city_from_id,
            city_to_id: city_to_id,
            timestamp_from: timestamp_from,
            timestamp_to: timestamp_to,
            flightCategories: flightCategories
        };

        console.log('Data: ', data);
        

        return this.httpClient.post(this.urlHelper.addNewFlightRoute, data, {headers: headers});
    }

    generateSeats(flight_id, flight_category_id, airplane_id) {
        const headers = new HttpHeaders();

        headers.append('Content-Type', 'application/json');

        const data = {
            rows: 5,
            seats: 6,
            flight_id: flight_id,
            flight_category_id: flight_category_id,
            airplane_id: airplane_id
        }
        
        return this.httpClient.post(this.urlHelper.generateNewSeatsRoute, data, {headers: headers});
    }

    // getAllSentRequests(){
    //     const headers = new HttpHeaders();

    //     headers.append('Content-Type', 'application/json');

    //     return this.httpClient.get(this.urlHelper.getAllSentRequestsRoute, { headers: headers, withCredentials: true });
    // }

    // getAllReceivedRequests(){
    //     const headers = new HttpHeaders();

    //     headers.append('Content-Type', 'application/json');

    //     return this.httpClient.get(this.urlHelper.getAllReceivedRequestsRoute, { headers: headers, withCredentials: true });
    // }

    // getAllBanks(){
    //     const headers = new HttpHeaders();

    //     headers.append('Content-Type', 'application/json');

    //     return this.httpClient.get(this.urlHelper.getAllBanksRoute, { headers: headers, withCredentials: true });
    // }

    // // tslint:disable-next-line: max-line-length
    // createRequest(contentBlinkingID: BlinkingIDModel, contentATRPermission: ATRPermissionModel, atrPermissionAttachement: any, account: AccountModel, transferInstructions: TransferInstructionsModel, identityNumber: string, oldBank: BankModel, bankEmployee: BankEmployeeModel) {
    //     const headers = new HttpHeaders();

    //     headers.append('Content-Type', 'application/json');

    //     const data = {
    //         contentBlinkingID: JSON.parse(JSON.stringify(contentBlinkingID)),
    //         contentATRPermission: JSON.parse(JSON.stringify(contentATRPermission)),
    //         account: JSON.parse(JSON.stringify(account)),
    //         transferInstructions: JSON.parse(JSON.stringify(transferInstructions)),
    //         atrPermissionAttachement: atrPermissionAttachement,
    //         identityNumber: identityNumber,
    //         oldBank: JSON.parse(JSON.stringify(oldBank)),
    //         bankEmployee: JSON.parse(JSON.stringify(bankEmployee))
    //     };

    //     return this.httpClient.post(this.urlHelper.createRequestRoute, data, {headers: headers, withCredentials: true });
    // }

    // getBlinkingId(accessToken: string) {
    //     const headers = new HttpHeaders();

    //     headers.append('Content-Type', 'application/json');

    //     const data = {
    //         accessToken: accessToken
    //     };

    //     return this.httpClient.post(this.urlHelper.getBlinkingIdRoute, data, {headers: headers, withCredentials: true });
    // }

    // approveAccountTransferRequest(accountTransferId, status, description, documents, accessToken, initiator) {
    //     const headers = new HttpHeaders();

    //     headers.append('Content-Type', 'application/json');

    //     const data = {
    //         accountTransferId: accountTransferId,
    //         status: status,
    //         description: description,
    //         documents: JSON.parse(JSON.stringify(documents)),
    //         accessToken: accessToken,
    //         initiator: JSON.parse(JSON.stringify(initiator))
    //     };

    //     return this.httpClient.post(this.urlHelper.approveAccountTransferRequestRoute, data, {headers: headers, withCredentials: true });
    // }

    // getDocuments(identityNumber: string, accountTransferId: string, accessTokenId: string) {
    //     const headers = new HttpHeaders();

    //     headers.append('Content-Type', 'application/json');

    //     const data = {
    //         accountTransferId: accountTransferId,
    //         identityNumber: identityNumber,
    //         accessTokenId: accessTokenId
    //     };

    //     return this.httpClient.post(this.urlHelper.getDocumentsRoute, data, {headers: headers, withCredentials: true });
    // }

    // finishAccountTransferRequest(accountTransferId, description, initiator) {
    //     const headers = new HttpHeaders();

    //     headers.append('Content-Type', 'application/json');

    //     const data = {
    //         accountTransferId: accountTransferId,
    //         description: description,
    //         initiator: JSON.parse(JSON.stringify(initiator))
    //     };

    //     return this.httpClient.post(this.urlHelper.finishAccountTransferRequestRoute, data, {headers: headers, withCredentials: true });
    // }

    // getDocumentData(accessTokenId: string, documentId: string) {
    //     const headers = new HttpHeaders();

    //     headers.append('Content-Type', 'application/json');

    //     const data = {
    //         accessToken: accessTokenId,
    //         documentId: documentId
    //     };

    //     return this.httpClient.post(this.urlHelper.getDocumentsRoute, data, {headers: headers, withCredentials: true });
    // }

    // // Card Scanner Route
    // getIdCardScan() {
    //     const headers = new HttpHeaders();

    //     headers.append('Content-Type', 'application/json');

    //     return this.httpClient.get('http://localhost:8989/getIdCard', { headers: headers });
    // }
}