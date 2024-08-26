import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celeste_song')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('json', { nullable: true })
  musician_ids: number[];

  // 定义一个JSON类型的列来存储数组
  @Column('json', { nullable: true })
  category_ids: number[];

  @Column()
  image: string;
}