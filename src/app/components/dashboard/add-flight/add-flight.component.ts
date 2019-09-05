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
    let from=this.insertFlightForm.get('flightDestinationFrom').value;
    let to=this.insertFlightForm.get('flightDestinationTo').value;
    let timestampFrom=this.insertFlightForm.get('flightTimestampFrom').value;
    let timestampTo=this.insertFlightForm.get('flightTimestampTo').value;

    let airplaneName=this.insertFlightForm.get('airplaneName').value;
    let capacity=this.insertFlightForm.get('airplaneCapacity').value;

    let catName=this.insertFlightForm.get('flightCategoryname').value;
    let catPrice=this.insertFlightForm.get('flightCategoryPrice').value;
    let catCapacity= this.insertFlightForm.get('flightCategoryCapacity').value;

    console.log('VALUES FROM ADD FLIGHT FORM:', from, to, timestampFrom, timestampTo, airplaneName, 
    capacity, catName, catPrice, catCapacity);
    
  }

  addCategory(event: MouseEvent){
    this.addMoreCategories=true;
  }
   getValue() {
    var date = $('#datetimepicker1').data("DateTimePicker").date();
    if( date ){
      alert(date.unix());
    }
  }
}

