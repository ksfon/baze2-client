import { FlightCategoryModel } from './FlightCategoryModel';

export class FlightModel{
    from: string;
    to: string;
    timeFrom: string;
    timeTo: string;
    airplaneName: string;
    airplaneCapacity: number;
    flightCategries: FlightCategoryModel[];


    constructor(from: string, to: string, timeFrom: string, timeTo: string, airplaneName: string, 
        airplaneCapacity: number, flightCategories: FlightCategoryModel[]){
                this.from=from;
                this.to=to;
                this.timeFrom=timeFrom;
                this.timeTo=timeTo;
                this.airplaneName=airplaneName;
                this.airplaneCapacity=airplaneCapacity;
                this.flightCategries=flightCategories;
    }
}