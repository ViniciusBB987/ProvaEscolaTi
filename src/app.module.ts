import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitaModule } from './receita/receita.module';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import { Receita } from './receita/receita.entity';
import { Ingrediente } from './ingrediente/ingrediente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      entities: [Receita, Ingrediente],
      synchronize: true,
    }),
    ReceitaModule,
    IngredienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
