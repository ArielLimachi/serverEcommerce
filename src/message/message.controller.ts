import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { MessageDTO } from './dto/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {

    constructor(private messageService: MessageService){}

    // @Post()
    // async createMessage(@Res() res, @Body() messageDTO: MessageDTO){
    //     const message = await this.messageService.createMessage(messageDTO);
    //     console.log(message);
    //     return res.status(HttpStatus.OK).json({
    //         message: "message created",
    //         user: message
    //     });
    // }

    @Post()
    async createMessage(@Body() messageDTO: MessageDTO){
        console.log(messageDTO);  
        const message = await this.messageService.createMessage(messageDTO);             
    }

    @Get()
    async getMessages(@Res() res){
        const messages = await this.messageService.getMessages();
        return res.status(HttpStatus.OK).json({
            message: "all messages retreived",
            users: messages
        });
    }


}
