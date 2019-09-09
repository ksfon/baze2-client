export class ExtraServiceModel {
    extraServiceName: string;
    extraServicePrice: number;
    extraServiceDescription: string;

    constructor(name: string, price: number, description: string) {
        this.extraServiceName = name;
        this.extraServicePrice = price;
        this.extraServiceDescription = description;
    }
}