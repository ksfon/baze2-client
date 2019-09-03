import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  addMoreCategories=false;
  insertFlightForm = this.fb.group({

    flightDestinationFrom: ['', Validators.required],
    flightDestinationTo: ['', Validators.required],
    flightTimestampFrom: ['', Validators.required],
    flightTimestampTo: ['', Validators.required],

    airplaneName: ['', Validators.required],
    airplaneCapacity: ['', Validators.required],

    flightCategoryname: ['', Validators.required],
    flightCategoryPrice: ['', Validators.required],
    flightCategoryCapacity: ['', Validators.required]


  });

  newFlightCategory = false;
  constructor(private messageServise: MessageServiceService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.messageServise.sendMessage('navItem1');
  }

  onSubmit() {
    console.log(this.insertFlightForm.get('flightDestinationFrom').value);
    

  }
  addCategory(event: MouseEvent){
    this.addMoreCategories=true;
  }
}
