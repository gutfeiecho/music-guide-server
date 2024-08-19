import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('celeste_user')
export class User {
  @ApiProperty({
    description: 'ID of user',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Name of user', example: '黄老邪' })
  @Column()
  name: string;

  @ApiProperty({ description: 'IsActive of user', example: true })
  @Column({ default: true })
  isActive: boolean;
}