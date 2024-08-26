import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celeste_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({default: 'http://www.lukvision.cn/images/avatar.png'})
  image: string;

  @Column({ default: true })
  isActive: boolean;  
}