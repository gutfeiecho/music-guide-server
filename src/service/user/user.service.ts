import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(dto: CreateUserDto) {
    const { name } = dto;
    const user = await this.userRepository.findOneBy({
      name: name
    })
    if (user) {
      return {
        code: 200,
        msg: '已添加'
      }
    } else {
      await this.userRepository
        .createQueryBuilder()
        .insert()
        .values([
          {name: name}
        ])
        .execute()
      return {
        code: 200,
        msg: '添加成功'
      }
    }
    
  }
}
