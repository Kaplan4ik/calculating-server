import { IsNotEmpty, IsNumber } from 'class-validator';

export class CalculateDto {
  @IsNotEmpty()
  @IsNumber()
  number: number;
}
