import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CallBroker } from 'src/app/services/CallBroker';

@Component({
  selector: 'app-book-a-flight',
  templateUrl: './book-a-flight.component.html',
  styleUrls: ['./book-a-flight.component.css']
})
export class BookAFlightComponent implements OnInit {
  showCard = true;

  bookAFlightForm = this.fb.group({
    roundOneWay: [''],
    flightDestinationFrom: ['', Validators.required],
    flightDestinationTo: ['', Validators.required],
    flightTimestampFrom: ['', Validators.required],
    flightTimestampTo: ['', Validators.required],

  })

  getFlightsObservable: Subscription;

  constructor(
    private callBroker: CallBroker,private messageService: MessageServiceService, private fb: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.messageService.sendMessage('navItem2');

  }

  showFlightsCard(event: MouseEvent) {

  }

  addEconomyClass(event: MouseEvent) {
    console.log('ekonomska');

  }

  onSubmit() {
    this.showCard = false;
    // console.log(this.showCard);

    let from = this.bookAFlightForm.get('flightDestinationFrom').value;
    let to = this.bookAFlightForm.get('flightDestinationTo').value;
    let timestampFrom = this.bookAFlightForm.get('flightTimestampFrom').value;
    let timestampTo = this.bookAFlightForm.get('flightTimestampTo').value;
    let roundOneWay = this.bookAFlightForm.get('roundOneWay').value;

    console.log('from', from);
    console.log('to', to);
    console.log(timestampFrom, timestampTo);
    console.log('round/one way', roundOneWay);

    const timeFrom = new Date(timestampFrom).getTime()

    this.getFlightsObservable = this.callBroker.getFlights(from, to, timeFrom).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('flights', JSON.stringify(response))
      setTimeout(() => {
        this.router.navigate(['/dashboard/all-flights'])
      }, 2000);
    }, (err) => {
      console.log(err);
    });

  }

}