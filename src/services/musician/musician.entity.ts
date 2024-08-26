import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celeste_musician')
export class Musician {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  country: string;
}