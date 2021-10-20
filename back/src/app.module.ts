import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { DMsService } from './dms/dms.service';
import { DMsController } from './dms/dms.controller';
import { DMsModule } from './dms/dms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';
import { UsersService } from './users/users.service';
import { EventsModule } from './events/events.module';
import { EventsGateway } from './events/events.gateway';
import { ProjectsModule } from './projects/projects.module';
import { ProjectUsersModule } from './project-users/project-users.module';
import { SkillsModule } from './skills/skills.module';
import { SkillUsersModule } from './skill-users/skill-users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    DMsModule,
    TypeOrmModule.forRoot(ormconfig),
    EventsModule,
    ProjectsModule,
    ProjectUsersModule,
    SkillsModule,
    SkillUsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
