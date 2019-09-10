import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-a-flight',
  templateUrl: './book-a-flight.component.html',
  styleUrls: ['./book-a-flight.component.css']
})
export class BookAFlightComponent implements OnInit {
  showCard=true;
  bookAFlightForm: FormGroup;

  constructor(private messageService: MessageServiceService, private fb: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.initializeForm();
    this.messageService.sendMessage('navItem2');
  }

  initializeForm() {
    this.bookAFlightForm = new FormGroup({
      flightDestinationFrom: new FormControl(null, Validators.required),
      flightDestinationTo: new FormControl(null, Validators.required),
      flightTimestampFrom: new FormControl(null, Validators.required),
      flightTimestampTo: new FormControl(null, Validators.required),
      roundTrip: new FormControl('false', Validators.required)
    });
  }

  showFlightsCard(event: MouseEvent) {
    console.log(event);
    
    let flightDestinationFrom = this.bookAFlightForm.get('flightDestinationFrom').value;
    let value = (<HTMLInputElement>document.getElementById("flightDestinationFrom")).value
    console.log(flightDestinationFrom);
    console.log(value);
    // this.showCard=false;
    console.log(this.showCard);
    console.log(this.bookAFlightForm.value);
    
    // setTimeout(()=>{
    //   this.router.navigate(['/dashboard/all-flights'])
    // },2000);
  }

  onSubmit() {
    let flightDestinationFrom = this.bookAFlightForm.get('flightDestinationFrom').value;
    console.log(flightDestinationFrom);
    console.log(this.bookAFlightForm.value);

  }

  addEconomyClass(event: MouseEvent) {
    console.log('ekonomska');

  }
  
}
