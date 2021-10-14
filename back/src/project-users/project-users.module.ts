import { Module } from '@nestjs/common';
import { ProjectUsersService } from './project-users.service';
import { ProjectUsersController } from './project-users.controller';

@Module({
  providers: [ProjectUsersService],
  controllers: [ProjectUsersController]
})
export class ProjectUsersModule {}
