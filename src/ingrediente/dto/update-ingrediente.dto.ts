import { IsOptional, IsString } from 'class-validator';

export class UpdateIngredienteDto {
  @IsOptional()
  @IsString()
  nome?: string;
}
