import { Schema } from "mongoose";

export const MessageSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    message: String
});