import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { Users } from '../entities/Users';
import { User } from '../decorators/user.decorator';
@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Get()
    async getProfile(@User() user: Users) {
      return user || false;
    }
    // @Get()
    // getUsers(@Req() req) {
    //     console.log(req.user)
    //     return req.user;
    // }

    @Post()
    postUsers(@Body() data: JoinRequestDto) {
        this.usersService.postUsers(data.nickname, data.slimeColor)
        console.log(this.usersService)
    }

    @Post('login')
    logIn(@Req() req) {
        return req.user;
    }

    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connet.sid', {httpOnly: true});
        res.sent('ok');
    }
}
