import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { validate } from 'class-validator';
import { SECRET } from 'src/config/jwt.config';
const jwt = require('jsonwebtoken');

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
    const { name, email, password } = dto;
    
    const users = await this.userRepository.find({
      where: [
        {name: name},
        {email: email}
      ]
    });
    console.log("🚀 ~ UserService ~ create ~ users:", users)
    if (users.length) {
      const error = { msg: 'Username and email must be unique'};
      throw new HttpException({message: 'Input data validation failed', error}, HttpStatus.BAD_REQUEST);
    }

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;

    const errors = await validate(user);

    if (errors.length > 0) {
      const error = { msg: 'Input is not valid'};
      throw new HttpException({message: 'Input data validation failed', error}, HttpStatus.BAD_REQUEST);
    } else {
      const savedUser = await this.userRepository.save(user);
      return this.buildUserRO(savedUser);
    }
  }

  async findOne({email, password}: LoginUserDto) {
    const user = await this.userRepository.findOneBy({email});
  }

  public generateJWT(user) {
    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
      id: user.id,
      username: user.username,
      email: user.email,
      exp: exp.getTime() / 1000,
    }, SECRET);
  };

  private buildUserRO(user: User) {
    const userRO = {
      id: user.id,
      name: user.name,
      email: user.email,
      token: this.generateJWT(user),
      image: user.image
    };

    return {...userRO};
  }
}
