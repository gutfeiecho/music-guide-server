import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('celeste_category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  parentId: number;

  @Column()
  description: string;
}