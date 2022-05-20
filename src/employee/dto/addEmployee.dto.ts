import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class Address {
  @IsNotEmpty()
  @IsString()
  readonly city: string;

  @IsNotEmpty()
  @IsNumber()
  readonly zipCode : number;

  @IsNotEmpty()
  @IsString()
  readonly addressLine1 : string;

  @IsString()
  @IsOptional()
  readonly addressLine2? : string;
}

export class AddEmployeeDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  readonly phone: string;

  @IsNotEmpty()
  @Type(() => Address)
  @ValidateNested()
  readonly homeAddress: Address;

  @IsNotEmpty()
  @IsDate()
  readonly doe: Date; //date of employment

  @IsNotEmpty()
  @IsDate()
  readonly dob: Date; //date of birth
}
