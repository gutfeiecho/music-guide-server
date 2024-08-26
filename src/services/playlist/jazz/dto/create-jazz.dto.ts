import { ApiProperty } from "@nestjs/swagger";
export class CreateJazzDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  musician: string;

  @ApiProperty()
  category: number;

  @ApiProperty()
  createdTime: Date;
}
