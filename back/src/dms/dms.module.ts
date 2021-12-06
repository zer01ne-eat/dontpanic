import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DMsRepository } from './dms.repository';
import { DMsController } from './dms.controller';
import { DMsService } from './dms.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DMsRepository])
  ],
  providers: [DMsService],
  controllers: [DMsController]
})
export class DMsModule {}
