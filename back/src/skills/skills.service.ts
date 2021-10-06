import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillsRepository } from './skills.repository';
import { Skills} from 'src/entities/Skills';

@Injectable()
export class SkillsService {
    constructor (
        @InjectRepository(SkillsRepository)
        private userRepository: SkillsRepository, ) {}
    // async postUsers(userDto: UserDto): Promise<Users> {
    //     const {nickname, slimeColor} = userDto;

    //     const user = this.userRepository.create({
    //         nickname,
    //         slimeColor,
    //     })

    //     await this.userRepository.save(user);
    //     return user;
    // }

    async getSkills(): Promise <Skills> {
        const found = await this.userRepository.findOne(1);
        if(!found) {
            throw new NotFoundException("Can't find Board with id");
        }
        return found;
    }
}
