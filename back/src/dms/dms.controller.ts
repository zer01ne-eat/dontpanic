import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('api/dms')
export class DmsController {
    @Get('chats')
    getChat(@Query() query) {
        console.log(query.perPage, query.page);
    }

    @Post('chats')
    postChat(@Body() body) {
        console.log(body);
        
    }
}
