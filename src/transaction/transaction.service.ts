import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './interfaces/transaction.interface';
import { TransactionDTO } from './dto/transaction.dto';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class TransactionService {

    constructor (@InjectModel('Transaction') private readonly transactionModel: Model<Transaction>,
                                             private productService: ProductService){}

    async createTransaction(transactionDTO: TransactionDTO): Promise<Transaction>{        
        const transaction = new this.transactionModel(transactionDTO);
        const updatedProducts = await this.updateStock(transaction.items);        
        return await transaction.save();        
    }

    async updateStock(items: Array<string>){    
        for (let index = 0; index < items.length; index++) {
            const product = await this.productService.getProduct(items[index]);            
            product.stock --;
            const updatedProduct = await this.productService.updateProduct2(items[index],product);                          
        }     
    }   
    
    async getTransactions() {
        const transactions = await this.transactionModel.find();
        return transactions;
    }

    async getTransaction(transactionID: string): Promise<Transaction>{
        const transaction = await this.transactionModel.findById(transactionID);
        return transaction;
    }
}
