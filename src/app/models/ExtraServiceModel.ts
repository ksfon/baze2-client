export class ExtraServiceModel {
    extraServiceId: string;
    extraServiceName: string;
    extraServicePrice: number;
    extraServiceDescription: string;

    constructor(extraServiceId, name: string, price: number, description: string) {
        this.extraServiceId = extraServiceId;
        this.extraServiceName = name;
        this.extraServicePrice = price;
        this.extraServiceDescription = description;
    }
}