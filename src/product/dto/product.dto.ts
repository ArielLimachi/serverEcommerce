// export class CreateProductDTO {
//     readonly name: string;
//     readonly description: string;
//     readonly imageURL: string;
//     readonly price: number;
//     readonly createdAt: Date;
//     readonly sizes: number[];
// }

export type Type = 'Men' | 'Woman' | 'Children';
export type ForeignExchange = 'USD' | 'BS';
export type EUsize = '36' | '37' | '38' | '39' | '40' | '41' | '42';
export type Colors = 'White' | 'Blue' | 'Black' | 'Purple' | 'Red' | 'Yellow' | 'Brown' | 'Green' | 'Multicolor' | 'anyColor';

export interface CreateProductDTO extends Document {
    imageUrl: string;
    name: string;
    price: number;
    shortDescription: string;
    type: string;
    color: string;
    size: Array<number>;
    foreignExchange: string;
}

//     "color": "Black",
//     "foreignExchange": "USD",
//     "id": "1",
//     "imageUrl": "https://www.prodirectselect.com/productimages/V3_1_Main/257698_Main_1089752.jpg?imwidth=768",
//     "name": "Vegetarian meal",
//     "price": 100,
//     "shortDescription": "A delicious vegetarian meal",    
//     "size":["42", "41", "40"],
//     "type": "wear"