import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { DmsService } from './dms/dms.service';
import { DmsController } from './dms/dms.controller';
import { DmsModule } from './dms/dms.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, DmsModule],
  controllers: [AppController, DmsController],
  providers: [AppService, DmsService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
