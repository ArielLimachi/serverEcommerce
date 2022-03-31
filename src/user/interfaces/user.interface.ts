import { Document } from "mongoose"

export interface User extends Document{
    firstName: string;
    lastname: string;
    email: string;
    cellphone: number;
    nickname: string;
    adress: string;
}