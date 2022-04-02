import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from './schemas/transaction.schema';
import { ProductModule } from 'src/product/product.module';

@Module({
    imports: [MongooseModule.forFeature([
        {name: 'Transaction', schema: TransactionSchema}
      ]),ProductModule],
      controllers: [TransactionController],
      providers: [TransactionService]
})
export class TransactionModule {}
