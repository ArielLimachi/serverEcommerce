import { Document } from "mongoose"

// export interface Product extends Document{
//     readonly name: string;
//     readonly description: string;
//     readonly imageURL: string;
//     readonly price: number;
//     readonly createdAt: Date;
// }

export type Type = 'Men' | 'Woman' | 'Children';
export type ForeignExchange = 'USD' | 'BS';
export type EUsize = '36' | '37' | '38' | '39' | '40' | '41' | '42';
export type Colors = 'White' | 'Blue' | 'Black' | 'Purple' | 'Red' | 'Yellow' | 'Brown' | 'Green' | 'Multicolor' | 'anyColor';

export interface Product extends Document {
    imageUrl: string;
    name: string;
    price: number;
    shortDescription: string;
    type: string;
    color: string;
    size: Array<number>;
    foreignExchange: string;
}

// imageUrl: string;
//     name: string;
//     price: number;
//     shortDescription: string;
//     type: string;
//     color: string;
//     size: Array<number>;
//     foreignExchange: string;