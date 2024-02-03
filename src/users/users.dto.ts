import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Max, Min } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @Min(2)
  @Max(35)
  name: string;
}
