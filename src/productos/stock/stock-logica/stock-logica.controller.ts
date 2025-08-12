import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StockLogicaService } from './stock-logica.service';
import { Producto } from '../dto/producto/producto';

@Controller('stock-logica')
export class StockLogicaController {
    constructor(private readonly stock: StockLogicaService) {}

    @Get(':producto')
    obtenerCantidad(@Param('producto') producto: string) {
        return this.stock.obtenerCantidad(producto)
    }

    @Get()
    obtenerTodos() {
        return this.stock.listar()
    }
  
    @Post()
    agregarProducto(@Body() dto: Producto) {
        return this.stock.agregarProducto(dto)
    }
}
