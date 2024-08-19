import { Injectable } from '@nestjs/common';
import { JazzSong } from './interfaces/jazz.interface';

@Injectable()
export class JazzService {
  private readonly jazzSongs: JazzSong[] = [];

  create(jazz: JazzSong) {
    this.jazzSongs.push(jazz);
  }

  findOne(id: number) {
    return this.jazzSongs[id];
  }

  findAll(): JazzSong[] {
    return this.jazzSongs;
  }
}
