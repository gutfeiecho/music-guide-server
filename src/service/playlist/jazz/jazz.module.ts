import { Module } from '@nestjs/common';
import { JazzController } from './jazz.controller';
import { JazzService } from './jazz.service';

@Module({
  controllers: [JazzController],
  providers: [JazzService],
})
export class JazzModule {}
