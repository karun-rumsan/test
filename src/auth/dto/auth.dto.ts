import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @IsString()
  @ApiProperty()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}