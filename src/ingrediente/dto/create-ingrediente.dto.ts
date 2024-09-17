import { IsString } from 'class-validator';

export class CreateIngredienteDto {
  @IsString()
  nome: string;
}
