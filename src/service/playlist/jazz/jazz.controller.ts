import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  HttpException,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateJazzDto } from './dto/create-jazz.dto';
import { JazzService } from './jazz.service';

@Controller('playlist/jazz')
export class JazzController {
  constructor(private jazzService: JazzService) {}
  @Post()
  async create(@Body() createJazzDto: CreateJazzDto) {
    this.jazzService.create(createJazzDto);
  }

  @Get()
  async findAll() {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // return this.jazzService.findAll();
    try {
      return await this.jazzService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        { cause: error },
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jazzService.findOne(id);
  }
}
