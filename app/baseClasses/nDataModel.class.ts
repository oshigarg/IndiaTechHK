import { shipment } from '../src/app/models/shipment.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
shipment: shipment;
//DECLARE NEW VARIABLE

constructor() {
this.shipment = new shipment();
//CREATE NEW DM INSTANCE
    }
}