import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsMongoId,
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
  readonly zipCode: number;

  @IsNotEmpty()
  @IsString()
  readonly addressLine1: string;

  @IsString()
  @IsOptional()
  readonly addressLine2?: string;
}

export class SearchParams {
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}

export class QueryParams {
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  createdBefore?: Date;
}

export class EmployeeDto {
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

  @Type(() => Date)
  @IsNotEmpty()
  @IsDate()
  readonly doe: Date; //date of employment

  @Type(() => Date)
  @IsNotEmpty()
  @IsDate()
  readonly dob: Date; //date of birth
}
