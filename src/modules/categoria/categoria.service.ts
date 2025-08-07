import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCategoriaDto) {
    return this.prisma.categoria.create({ data });
  }

  async findAll() {
    return this.prisma.categoria.findMany();
  }

  async findById(id: string) {
    return this.prisma.categoria.findUnique({
      where: { id },
      include: { produtos: true },
    });
  }

  async remove(id: string) {
    return this.prisma.categoria.delete({ where: { id } });
  }
}
