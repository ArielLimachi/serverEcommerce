import { Controller, Post, Res, Body, HttpStatus, Get, Param } from '@nestjs/common';
import { TransactionDTO } from './dto/transaction.dto';
import { Transaction } from './interfaces/transaction.interface';
import { TransactionService } from "./transaction.service";

@Controller('transaction')
export class TransactionController {

    constructor(private transactionService: TransactionService){}

    @Post()
    async createTransaction(@Res() res, @Body() transactionDTO: TransactionDTO) {
        const transaction = await this.transactionService.createTransaction(transactionDTO);
        return res.status(HttpStatus.OK).json({            
            transaction
        });
    }

    @Get()
    async getTransactions() {        
        return await this.transactionService.getTransactions();
    }

    @Get(":transactionID")
    async getProduct(@Param("transactionID")transactionID: string) {        
        return await this.transactionService.getTransaction(transactionID);
    }
}
