import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { ExtraServiceModel } from 'src/app/models/ExtraServiceModel';
import { Subscription } from 'rxjs';
import { CallBroker } from 'src/app/services/CallBroker';
import { resolve } from 'url';

@Component({
  selector: 'app-flight-reservation-user',
  templateUrl: './flight-reservation-user.component.html',
  styleUrls: ['./flight-reservation-user.component.css']
})
export class FlightReservationUserComponent implements OnInit {

  seats;
  extraServices;
  documentCard = false;
  extraServiceCard = false;
  addPaymentCard = false;
  makeReservationForm = this.fb.group({
    seat: ['3', Validators.required],
    seatNumber: ['', Validators.required],

    extraServiceId: ['3', Validators.required],
    extraServiceName: ['', Validators.required],
    extraServicePrice: ['', Validators.required],
    extraServiceDescription: ['', Validators.required],

    //basic info

    title: ['Mr', Validators.required],
    firstName: ['Matija', Validators.required],
    lastName: ['Milekic', Validators.required],
    dateOfBirth: ['19.07.1995', Validators.required],
    sex: ['Male', Validators.required],

    //Contact info
    phoneNumber: ['+381 64 568923', Validators.required],
    email: ['matija.milekic@mail.com', Validators.required],

    //add travel documents
    documentName: ['Pasoš', Validators.required],
    documentType: ['Passport', Validators.required],
    documentNumber: ['1234567890', Validators.required],
    expirationDate: ['21.02.2021.', Validators.required],
    nationality: ['SRB', Validators.required],
    issuingCountry: ['Serbia', Validators.required],

    //payment details

    emailOfTheOwner: ['matija.milekic@mail.com', Validators.required],
    adressOfTheOwner: ['Orlovica Pavla 16', Validators.required],
    postalCode: ['11000', Validators.required],

    //card details
    cardNumber: ['1234567890', Validators.required],
    expirationdate: ['02/20', Validators.required],
    secretNumber: ['123', Validators.required],
    type: ['Maestro', Validators.required]

  })

  getSeatsAndExtraServicesObservable: Subscription;
  makeAReservationObservable: Subscription;
  addNewPassengerObservable: Subscription;
  passengerSitsObservable: Subscription;
  addNewPaymentCardObservable: Subscription;
  addNewPaymentObservable: Subscription;

  extraServicesArray: ExtraServiceModel[] = [];

  paymentCardId;

  constructor(
    private callBroker: CallBroker,
    private messageService: MessageServiceService, private fb: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.handleSeatsAndExtraServices();
  }

  onSubmit() {
    console.log('Form value so far: ', this.makeReservationForm.value);
  }

  makeAReservation() {
    console.log('Form values finished: ', this.makeReservationForm.value);

    const client = JSON.parse(localStorage.getItem('user'));
    const chosenFlight = JSON.parse(localStorage.getItem('chosenFlight'));
    const current_datetime = new Date()
    const formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
    const extraServiceId = this.makeReservationForm.get('extraServiceId').value;

    const title = this.makeReservationForm.get('title').value;
    const firstName = this.makeReservationForm.get('firstName').value;
    const lastName = this.makeReservationForm.get('lastName').value;
    const dateOfBirth = this.makeReservationForm.get('dateOfBirth').value;
    const sex = this.makeReservationForm.get('sex').value;
    const phoneNumber = this.makeReservationForm.get('phoneNumber').value;
    const email = this.makeReservationForm.get('email').value;

    const documentNumber = this.makeReservationForm.get('documentNumber').value;
    const expirationdate = this.makeReservationForm.get('expirationdate').value;
    const nationality = this.makeReservationForm.get('nationality').value;

    const seatId = this.makeReservationForm.get('seat').value;

    this.makeAReservationObservable = this.callBroker.createAReservation(client.client_id, chosenFlight.flight_id, chosenFlight.flightCategories[0].flight_category_id, formatted_date, extraServiceId).subscribe((response: any) => {
      console.log(response);
      this.addNewPassengerObservable = this.callBroker.addNewPassenger(title, firstName, lastName, dateOfBirth, sex, phoneNumber, email,documentNumber,expirationdate, nationality, chosenFlight.flight_id, chosenFlight.flightCategories[0].flight_category_id, client.client_id).subscribe((response2: any) => {
        console.log(response2);
        const passengerId = response2;

        this.passengerSitsObservable = this.callBroker.passengerSits(seatId, client.client_id, chosenFlight.flight_id, chosenFlight.flightCategories[0].flight_category_id, passengerId).subscribe((response3: any) => {
          console.log(response3);
        }, (err2) => {
          console.log(err2);
        });
      }, (err1) => {
        console.log(err1);
      });
    }, (err) => {
      console.log(err);
    });
  }

  handleSeatsAndExtraServices() {
    const chosenFlight = JSON.parse(localStorage.getItem('chosenFlight'));
    this.getSeatsAndExtraServicesObservable = this.callBroker.getSeatsAndExtraServices(chosenFlight.flight_id, chosenFlight.flightCategories[0].flight_category_id, chosenFlight.airplane_id).subscribe((response: any) => {
      console.log(response);
      this.seats = response.seats;
      this.extraServices = response.extraServices;
      this.handleExtraServices();
    }, (err) => {
      console.log(err);
    });
  }

  handleExtraServices() {
    for (const extraService of this.extraServices) {
      const extraServiceData = new ExtraServiceModel(extraService.extra_service_type_id, extraService.name, extraService.price, 'Description');
      this.extraServicesArray.push(extraServiceData);
    }
  }

  openDocumentCard() {
    this.documentCard = !this.documentCard;
  }
  openExtraServiceCard() {
    this.extraServiceCard = !this.extraServiceCard;
  }
  openPaymentCard() {
    const client = JSON.parse(localStorage.getItem('user'));
    const cardNumber = this.makeReservationForm.get('cardNumber').value;
    const expirationdate = this.makeReservationForm.get('expirationdate').value;
    const secretNumber = this.makeReservationForm.get('secretNumber').value;
    const type = this.makeReservationForm.get('type').value;
    this.addNewPaymentCardObservable = this.callBroker.addNewPaymentCard(client.client_id, cardNumber, expirationdate, secretNumber, type).subscribe((response: any) => {
      console.log(response);
      this.paymentCardId = response[0].payment_card_id;
      this.addPaymentCard = true;
    }, (err2) => {
      console.log(err2);
    });
  }

  pay() {
    const client = JSON.parse(localStorage.getItem('user'));
    const chosenFlight = JSON.parse(localStorage.getItem('chosenFlight'));

    const emailOfTheOwner = this.makeReservationForm.get('emailOfTheOwner').value;
    const adressOfTheOwner = this.makeReservationForm.get('adressOfTheOwner').value;
    const postalCode = this.makeReservationForm.get('postalCode').value;
    this.addNewPaymentObservable = this.callBroker.addNewPayment(chosenFlight.flight_id, chosenFlight.flightCategories[0].flight_category_id, client.client_id, this.paymentCardId, emailOfTheOwner, adressOfTheOwner, postalCode).subscribe((response: any) => {
      console.log(response);
    }, (err2) => {
      console.log(err2);
    });
  }
}
