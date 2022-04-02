import { Document } from "mongoose"

export interface Message extends Document{
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly message: string;
}