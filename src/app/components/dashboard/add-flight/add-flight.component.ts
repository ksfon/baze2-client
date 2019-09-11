import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CallBroker } from 'src/app/services/CallBroker';
import * as moment from 'moment';
import { FlightCategoryModel } from 'src/app/models/FlightCategoryModel';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { ConditionalExpr } from '@angular/compiler';
import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  addMoreCategories = false;
  addBusinessClassForm = false;
  addFirstClassForm=false;
  citiesFrom: string[] = [];
  citiesTo: string[] = [];



  insertFlightForm = this.fb.group({

    flightDestinationFrom: ['', Validators.required],
    flightDestinationTo: ['', Validators.required],

    flightTimestampFrom: ['', Validators.required],
    flightTimestampTo: ['', Validators.required],

    airplaneName: ['', Validators.required],
    airplaneCapacity: ['', Validators.required],

    flightCategoryname: ['', Validators.required],
    flightCategoryPrice: ['', Validators.required],
    flightCategoryCapacity: ['', Validators.required],

    flightCategorynameBusiness: ['', Validators.required],
    flightCategoryPriceBusiness: ['', Validators.required],
    flightCategoryCapacityBusiness: ['', Validators.required],

    flightCategorynameFirst: ['', Validators.required],
    flightCategoryPriceFirst: ['', Validators.required],
    flightCategoryCapacityFirst: ['', Validators.required]

  });

  //niz modela sa tri polja - name, price, category
  numberOfCategories: FlightCategoryModel[] = [];
  newFlightCategory = false;

  airplanes;
  airplane_id;
  airplane_capacity = 0;

  addNewFlightObservable: Subscription;
  generateSeatsObservable: Subscription;

  constructor(
    private callBroker: CallBroker,
    private messageServise: MessageServiceService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.airplanes = JSON.parse(localStorage.getItem('airplanes'));
    this.messageServise.sendMessage('navItem1');
    this.initializeCities();
  }

  initializeCities() {
    const cities = JSON.parse(localStorage.getItem('cities'));
    for (const city of cities) {
      this.citiesFrom.push(city.city_name);
      this.citiesTo.push(city.city_name);
    }
  }


  onSubmit() {


    let from = this.insertFlightForm.get('flightDestinationFrom').value;
    let to = this.insertFlightForm.get('flightDestinationTo').value;

    const cities = JSON.parse(localStorage.getItem('cities'));
    const city_from_id = cities.filter(city => city.city_name === from)[0].city_id;
    const city_to_id = cities.filter(city => city.city_name === to)[0].city_id;
    const country_from_id = cities.filter(city => city.city_name === from)[0].country_id;
    const country_to_id = cities.filter(city => city.city_name === to)[0].country_id;

    // console.log('City from: ' + from + ' id: ' + city_from_id + ', country_id: ' + country_from_id);
    // console.log('City to: ' + to + ' id: ' + city_to_id + ', country_id: ' + country_to_id);

    let flightTimestampFrom = this.insertFlightForm.get('flightTimestampFrom').value;
    let flightTimestampTo = this.insertFlightForm.get('flightTimestampTo').value;

    const timestampFrom = moment.utc(flightTimestampFrom).valueOf();
    const timestampTo = moment.utc(flightTimestampTo).valueOf();

    console.log('Timestamp from: ' + timestampFrom + ', Timestamp to: ' + timestampTo);

    let catName = this.insertFlightForm.get('flightCategoryname').value;
    let catPrice = this.insertFlightForm.get('flightCategoryPrice').value;
    let catCapacity = this.insertFlightForm.get('flightCategoryCapacity').value;



    
    const flightCategory = {
      name: catName,
      price: catPrice,
      capacity: catCapacity
    }

    this.addNewFlightObservable = this.callBroker.addFlight(this.airplane_id, country_from_id, country_to_id, city_from_id, city_to_id, timestampFrom, timestampTo, [flightCategory]).subscribe((response: any) => {
      console.log(response);
      this.generateSeatsObservable = this.callBroker.generateSeats(response, 1, this.airplane_id).subscribe((response2: any) => {
        console.log(response2);
      }, (err2) => {
        console.log(err2);
      });
    }, (err) => {
      console.log(err);
    });
  }

  // addCategory(event: MouseEvent) {
  //   this.addMoreCategories = true;
  // }

  onAddCategory() {
    this.numberOfCategories.push(new FlightCategoryModel());
    console.log(this.numberOfCategories);
  }

  onRemoveCategory() {
    this.numberOfCategories.pop();
    console.log(this.numberOfCategories);
  }

  onChange(airplane_name) {
    const chosenOne = this.airplanes.filter(airplane => airplane.name === airplane_name)[0];
    this.airplane_capacity = chosenOne.capacity;
    this.airplane_id = chosenOne.airplane_id;
    this.insertFlightForm.get('airplaneCapacity').setValue(this.airplane_capacity);
    (<HTMLInputElement>document.getElementById("airplaneCapacity")).value = this.airplane_capacity + '';
  }

  addBusinessClass() {
    this.addBusinessClassForm = true;
  }

  addFirstClass(){
    this.addFirstClassForm=true;
  }
}

