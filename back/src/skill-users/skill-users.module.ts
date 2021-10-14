import { Module } from '@nestjs/common';
import { SkillUsersController } from './skill-users.controller';
import { SkillUsersService } from './skill-users.service';

@Module({
  controllers: [SkillUsersController],
  providers: [SkillUsersService]
})
export class SkillUsersModule {}
