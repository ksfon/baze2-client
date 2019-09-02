import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import * as $ from 'jquery';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

 
  constructor(private messageService: MessageServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    
  }



}
