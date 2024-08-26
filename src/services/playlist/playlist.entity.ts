import { Entity, Column, PrimaryGeneratedColumn , OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { Song } from '../song/song.entity';
@Entity('celeste_playlist')
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  song_ids: number[]

  @Column({
    type: 'timestamp',
    transformer: {
      to(value: Date): string {
        return value.toISOString(); // 转换为ISO格式的字符串
      },
      from(value: string): Date {
        return new Date(value); // 从字符串转换为Date对象
      }
    },
    default: () => 'CURRENT_TIMESTAMP'
  })
  created_time: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}