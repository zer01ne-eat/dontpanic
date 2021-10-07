import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DmsRepository } from './dms.repository';
import { DMsController } from './dms.controller';
import { DMsService } from './dms.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([DmsRepository])
      ],
    providers: [DMsService],
    controllers: [DMsController]
})
export class DMsModule {}
