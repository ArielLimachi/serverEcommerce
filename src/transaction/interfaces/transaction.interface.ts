import { Document } from "mongoose"

export interface Transaction extends Document {
    //personal info
    firstName: string;
    lastName: string;
    email: string;
    identifier: string;
    //address
    avenue: string;
    number: string;
    department: string;
    building: string;
    //pay method
    payMethod: string; //credit card-cash-transfer-crypto
    //shipping method
    shippingMethod: string;//personal-premium-delivery
    //bought items
    items: Array<string>;
}