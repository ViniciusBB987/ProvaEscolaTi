import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReceitaDto {
  @IsString()
  nome: string;

  @IsNumber()
  tempoPreparo: number;

  @IsNumber()
  custoAproximado: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngredienteDto)
  ingredientes: IngredienteDto[];
}

class IngredienteDto {
  @IsString()
  nome: string;
}
