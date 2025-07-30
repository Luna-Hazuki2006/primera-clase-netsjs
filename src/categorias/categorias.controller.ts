import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}
  @Get('all')
  getCategorias(): Array<string> {
    return this.categoriasService.verCategoria();
  }
  @Post('create')
  createProduct(@Body() data: { name: string }) {
    return this.categoriasService.guardarCategorias(data.name);
  }
}
