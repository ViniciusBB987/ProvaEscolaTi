import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitaController } from './receita/receita.controller';
import { ReceitaService } from './receita/receita.service';
import { IngredienteController } from './ingrediente/ingrediente.controller';
import { IngredienteService } from './ingrediente/ingrediente.service';
import { ReceitaModule } from './receita/receita.module';

@Module({
  imports: [ReceitaModule],
  controllers: [AppController, ReceitaController, IngredienteController],
  providers: [AppService, ReceitaService, IngredienteService],
})
export class AppModule {}
