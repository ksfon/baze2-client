import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-reservation-user',
  templateUrl: './flight-reservation-user.component.html',
  styleUrls: ['./flight-reservation-user.component.css']
})
export class FlightReservationUserComponent implements OnInit {

 showCard=true;
  bookAFlightForm = this.fb.group({
    flightDestinationFrom: ['', Validators.required],
    flightDestinationTo: ['', Validators.required],
    flightTimestampFrom: ['', Validators.required],
    flightTimestampTo: ['', Validators.required],
    city: ['', Validators.required],
    airplaneName: ['', Validators.required],


  })

  constructor(private messageService: MessageServiceService, private fb: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.messageService.sendMessage('navItem2');
   
  }

  showFlightsCard(event: MouseEvent) {
  
    
    this.showCard=false;
    console.log(this.showCard);
    setTimeout(()=>{
      this.router.navigate(['/dashboard/all-flights'])
    },2000);
  }

  addEconomyClass(event: MouseEvent) {
    console.log('ekonomska');

  }
  
}
