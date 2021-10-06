import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/join.request.dto';
import { UserRepository } from './users.repository';
import { Users
 } from 'src/entities/Users';
@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(UserRepository)
        private userRepository: UserRepository, ) {}
    async postUsers(userDto: UserDto): Promise<Users> {
        const {nickname, slimeColor} = userDto;

        const user = this.userRepository.create({
            nickname,
            slimeColor,
        })

        await this.userRepository.save(user);
        return user;
    }

    async getUsers(): Promise <Users> {
        const found = await this.userRepository.findOne(1);
        if(!found) {
            throw new NotFoundException("Can't find Board with id");
        }
        return found;
    }
}
