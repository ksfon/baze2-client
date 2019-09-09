import { Component, OnInit } from '@angular/core';
import { FlightModel } from 'src/app/models/FlightModel';
import { FlightCategoryModel } from 'src/app/models/FlightCategoryModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {

  allFlights: FlightModel[]=[];
  f1=new FlightModel('Belgrade','Vienna','19:30','21:30','wizz air',200,[new FlightCategoryModel('business class',300,100),new FlightCategoryModel('economy class',200,50)]);
  f2=new FlightModel('Belgrade','Budva','21:30','22:30','sas',320,[new FlightCategoryModel('business class',300,100),new FlightCategoryModel('economy class',200,50),
                                    new FlightCategoryModel('first class',1000,50)]);
  f3=new FlightModel('Belgrade','Dubai','21:30','23:30','sas',1000,[new FlightCategoryModel('business class',300,100),new FlightCategoryModel('economy class',200,50)]);

  constructor(private router: Router) { }

  ngOnInit() {
    this.allFlights.push(this.f1);
    this.allFlights.push(this.f2);
    this.allFlights.push(this.f3);
    console.log(this.allFlights);
    

  }

  makeAReservation(){
    this.router.navigate(['/dashboard/flightReservationUser'])
  }

}
