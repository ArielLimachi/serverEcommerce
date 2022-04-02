import { Schema } from "mongoose";

export const TransactionSchema = new Schema ({
    //personal info
    firstName: String,
    lastName: String,
    email: String,
    identifier: String,
    //address
    avenue: String,
    number: String,
    department: String,
    building: String,
    //pay method
    payMethod: String, //credit card-cash-transfer-crypto
    //shipping method
    shippingMethod: String,//personal-premium-delivery
    //bought items
    items: Array
});