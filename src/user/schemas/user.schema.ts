import { Schema } from "mongoose";

export const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    cellphone: Number,
    nickname: String,
    adress: String    
});

    