import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';


@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProdutoDto) {
    return this.prisma.produto.create({ data });
  }

  async findAll() {
    return this.prisma.produto.findMany({ include: { categoria: true } });
  }

  async findByCategoriaId(categoriaId: string) {
    return this.prisma.produto.findMany({
      where: { categoriaId },
      include: { categoria: true },
    });
  }

  async findById(id: string) {
    return this.prisma.produto.findUnique({ where: { id }, include: { categoria: true } });
  }

  async update(id: string, data: UpdateProdutoDto) {
    return this.prisma.produto.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.produto.delete({ where: { id } });
  }
}
