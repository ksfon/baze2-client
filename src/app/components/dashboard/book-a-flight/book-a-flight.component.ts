import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-a-flight',
  templateUrl: './book-a-flight.component.html',
  styleUrls: ['./book-a-flight.component.css']
})
export class BookAFlightComponent implements OnInit {
  showCard=true;
  bookAFlightForm = this.fb.group({
    flightDestinationFrom: ['', Validators.required],
    flightDestinationTo: ['', Validators.required],
    flightTimestampFrom: ['', Validators.required],
    flightTimestampTo: ['', Validators.required],
    city: ['', Validators.required],
    airplaneName: ['', Validators.required],
    roundTrip: ['false', Validators.required]
  })

  constructor(private messageService: MessageServiceService, private fb: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.messageService.sendMessage('navItem2');
  }

  showFlightsCard(event: MouseEvent) {
  
    
    this.showCard=false;
    console.log(this.showCard);
    console.log(this.bookAFlightForm.value);
    
    // setTimeout(()=>{
    //   this.router.navigate(['/dashboard/all-flights'])
    // },2000);
  }

  addEconomyClass(event: MouseEvent) {
    console.log('ekonomska');

  }
  
}
