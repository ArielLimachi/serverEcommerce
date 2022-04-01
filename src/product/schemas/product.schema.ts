import { Schema } from "mongoose";

// export const ProductSchema = new Schema({
//     name: {type: String, required: true},
//     description: String,
//     imageURL: String,
//     price: Number,
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// export type Type = 'Men' | 'Woman' | 'Children';
// export type ForeignExchange = 'USD' | 'BS';
// export type EUsize = '36' | '37' | '38' | '39' | '40' | '41' | '42';
// export type Colors = 'White' | 'Blue' | 'Black' | 'Purple' | 'Red' | 'Yellow' | 'Brown' | 'Green' | 'Multicolor' | 'anyColor';

export const ProductSchema = new Schema ({
    imageUrl: String,
    name: String,
    price: Number,
    shortDescription: String,
    type: String,
    color: String,
    size: Array,
    foreignExchange: String
});

// imageUrl: string;
//     name: string;
//     price: number;
//     shortDescription: string;
//     type: string;
//     color: string;
//     size: Array<number>;
//     foreignExchange: string;