import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { ExtraServiceModel } from 'src/app/models/ExtraServiceModel';

@Component({
  selector: 'app-flight-reservation-user',
  templateUrl: './flight-reservation-user.component.html',
  styleUrls: ['./flight-reservation-user.component.css']
})
export class FlightReservationUserComponent implements OnInit {

  documentCard = false;
  extraServiceCard = false;
  makeReservationForm = this.fb.group({
    seatRow: ['', Validators.required],
    seatNumber: ['', Validators.required],

    extraServiceName: ['', Validators.required],
    extraServicePrice: ['', Validators.required],
    extraServiceDescription: ['', Validators.required],

    //basic info

    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    sex: ['', Validators.required],

    //Contact info
    phoneNumber: ['', Validators.required],
    email: ['', Validators.required],

    //add travel documents
    documentName: ['', Validators.required],
    documentType: ['', Validators.required],
    documentNumber: ['', Validators.required],
    expirationDate: ['', Validators.required],
    nationality: ['', Validators.required],
    issuingCountry: ['', Validators.required],

    //payment details

    emailOfTheOwner: ['', Validators.required],
    adressOfTheOwner: ['', Validators.required],
    postalCode: ['', Validators.required],

    //card details
    cardNumber: ['', Validators.required],
    expirationdate: ['', Validators.required],
    secretNumber: ['', Validators.required],
    type: ['', Validators.required]




  })

  extraServicesArray: ExtraServiceModel[] = [];

  constructor(private messageService: MessageServiceService, private fb: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.extraServicesArray.push(new ExtraServiceModel('Advance Seat Selection', 200, 'description1'));
    this.extraServicesArray.push(new ExtraServiceModel('Empty Seat Option', 200, 'description2'));

  }

  openDocumentCard() {
    this.documentCard = !this.documentCard;
  }
  openExtraServiceCard() {
    this.extraServiceCard = !this.extraServiceCard;
  }


}
