import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb://localhost/ecommerce'), UserModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
