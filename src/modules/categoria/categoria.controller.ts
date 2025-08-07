import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  create(@Body() dto: CreateCategoriaDto) {
    return this.categoriaService.create(dto);
  }

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.categoriaService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(id);
  }
}
