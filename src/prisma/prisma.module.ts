import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Para que o PrismaService fique disponível em todo app sem precisar importar módulo várias vezes
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
