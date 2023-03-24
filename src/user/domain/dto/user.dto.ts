import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
  id: number;
  publicId: string;
  @IsString()
  @IsNotEmpty({ message: 'Cannot be empty' })
  name: string;
  @IsEmail()
  @IsNotEmpty({ message: 'Cannot be empty' })
  email: string;
  @IsNotEmpty({ message: 'Cannot be empty' })
  @MinLength(6, { message: 'Minimum of 6 characters' })
  @MaxLength(35, { message: 'Maximum of 35 characters' })
  password: string;
}
