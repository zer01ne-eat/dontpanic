import { Controller, Get, Req } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skills } from 'src/entities/Skills';

@Controller('api/skills')
export class SkillsController {
    constructor(private skillService: SkillsService){}

    @Get()
    getSkills(@Req() req): Promise<Skills> {
        return this.skillService.getSkills();
    }
}
