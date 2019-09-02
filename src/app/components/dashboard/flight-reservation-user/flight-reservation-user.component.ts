import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-flight-reservation-user',
  templateUrl: './flight-reservation-user.component.html',
  styleUrls: ['./flight-reservation-user.component.css']
})
export class FlightReservationUserComponent implements OnInit {

  constructor(private messageService: MessageServiceService) { }

  ngOnInit() {
    this.messageService.sendMessage('navItem2');
  }

}
