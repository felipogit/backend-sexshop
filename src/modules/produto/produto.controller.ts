import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() dto: CreateProdutoDto) {
    return this.produtoService.create(dto);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get('categoria/:categoriaId')
  findByCategoria(@Param('categoriaId') categoriaId: string) {
    return this.produtoService.findByCategoriaId(categoriaId);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.produtoService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProdutoDto) {
    return this.produtoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(id);
  }
}
