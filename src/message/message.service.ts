import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Message } from './interfaces/message.interface';
import { MessageDTO } from './dto/message.dto';

@Injectable()
export class MessageService {

    constructor (@InjectModel('Message') private readonly messageModel: Model<Message>){}

    async createMessage(messageDTO: MessageDTO): Promise<Message>{
        const message = new this.messageModel(messageDTO);
        await message.save();
        return message;
    }

    async getMessages(): Promise<Message[]>{
        const messages = await this.messageModel.find();
        return messages;
    }
}
