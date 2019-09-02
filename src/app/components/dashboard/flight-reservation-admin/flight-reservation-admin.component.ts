import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-flight-reservation-admin',
  templateUrl: './flight-reservation-admin.component.html',
  styleUrls: ['./flight-reservation-admin.component.css']
})
export class FlightReservationAdminComponent implements OnInit {

  constructor(private messageServise: MessageServiceService) { }

  ngOnInit() {
    this.messageServise.sendMessage('navItem3');
  }

}
