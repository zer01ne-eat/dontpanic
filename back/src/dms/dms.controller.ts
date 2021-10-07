import { Body, Controller, Get, Post, Query, Param } from '@nestjs/common';
import { Users } from 'src/entities/Users';
import { User } from '../decorators/user.decorator';
import { DMsService } from './dms.service';

@Controller('api/dms')
export class DMsController {
    constructor(private dmsService: DMsService) {}

    @Get('chats')
    async getWorkspaceDMChats(
      @Param('id') id,
      @Query('perPage') perPage,
      @Query('page') page,
      @User() user: Users,
    ) {
      return this.dmsService.getWorkspaceDMChats(
        +id,
        user.id,
        +perPage,
        +page,
      );
    }
  
    @Post('chats')
    async createWorkspaceDMChats(
      @Param('id') id,
      @Body('content') content,
      @User() user: Users,
    ) {
      return this.dmsService.createWorkspaceDMChats(content, +id, user.id);
    }
}
