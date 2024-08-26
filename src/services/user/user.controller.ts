import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ResultWrapper } from 'src/utils/ResultWrapper';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() user: CreateUserDto) {
    const data = await this.userService.create(user);
    return ResultWrapper.created(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }

  @Post('/user/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.userService.findOne(loginUserDto);
  }
}
