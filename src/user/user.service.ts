import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./interfaces/user.interface";
import { CreateUserDTO } from "./dto/user.dto";

@Injectable()
export class UserService {
    
    constructor (@InjectModel('User') private readonly userModel: Model<User>){}

    async getUsers(): Promise<User[]>{
        const users = await this.userModel.find();
        return users;
    }

    async getUser(userID: string): Promise<User>{
        const user = await this.userModel.findById(userID);
        return user;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User>{
        const user = new this.userModel(createUserDTO);
        await user.save();
        return user;
    }

    async deleteUser(userID: string): Promise<User>{
        const user = await this.userModel.findByIdAndDelete(userID);
        return user;
    }

    async updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<User>{
        const user = await this.userModel.findByIdAndUpdate(userID, createUserDTO,{new: true});
        return user;
    }
}
