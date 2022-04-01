import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateUserDTO } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    async createUser(@Res() res, @Body() userDTO: CreateUserDTO){
        const user = await this.userService.createUser(userDTO);
        return res.status(HttpStatus.OK).json({
            message: "user created",
            user
        });
    }

    @Get()
    async getUsers(@Res() res){
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json({
            message: "all users retreived",
            users
        });
    }

    @Delete(":userID")
    async deleteUser(@Res() res,@Param("userID") userID: string){
        const deletedUser = await this.userService.deleteUser(userID);
        return res.status(HttpStatus.OK).json({
            message: `user with id: ${userID} deleted`,
            deletedUser
        });
    }

    @Put(":userID")
    async updateUser(@Res() res, @Body() userDTO: CreateUserDTO, @Param("userID") userID: string){
        const updatedUser = await this.userService.updateUser(userID, userDTO);
        return res.status(HttpStatus.OK).json({
            message: `user with id: ${userID} updated`,
            updatedUser
        });
    }
}
