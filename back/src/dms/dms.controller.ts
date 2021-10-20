import { Body, Controller, Get, Post, Query, Param, Req } from '@nestjs/common';
import { DMs } from 'src/entities/DMs';
import { Users } from 'src/entities/Users';
import { User } from '../decorators/user.decorator';
import { DMsService } from './dms.service';

@Controller('api/dms')
export class DMsController {
    constructor(private dmsService: DMsService) {}
    
    @Get()
    getDMs(@Req() req): Promise<DMs> {
        return this.dmsService.getDMs();
    }

    // @Get('chats')
    // async getWorkspaceDMChats(
    //   @Param('id') id,
    //   @Query('perPage') perPage,
    //   @Query('page') page,
    //   @User() user: Users,
    // ) {
    //   return this.dmsService.getWorkspaceDMChats(
    //     +id,
    //     user.id,
    //     +perPage,
    //     +page,
    //   );
    // }
  
    // @Post('chats')
    // async createWorkspaceDMChats(
    //   @Param('id') id,
    //   @Body('content') content,
    //   @User() user: Users,
    // ) {
    //   return this.dmsService.createWorkspaceDMChats(content, +id, user.id);
    // }
}
