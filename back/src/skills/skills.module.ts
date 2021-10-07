import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillsRepository } from './skills.repository';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([SkillsRepository])
  ],
  providers: [SkillsService],
  controllers: [SkillsController]
})
export class SkillsModule {}
