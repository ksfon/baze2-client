export class FlightCategoryModel{
    name: string;
    price: number;
    capacity: number;

 
    constructor(name?: string, price?:number, capacity?:number){
        this.name=name;
        this.price=price;
        this.capacity=capacity;
    }
    
}