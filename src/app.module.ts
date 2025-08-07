import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { ProdutoModule } from './modules/produto/produto.module';

@Module({
  imports: [
    PrismaModule,
    CategoriaModule,
    ProdutoModule,

    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
