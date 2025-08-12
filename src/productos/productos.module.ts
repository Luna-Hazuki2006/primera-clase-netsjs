import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from "./productos.controller";
import { StockLogicaController } from './stock/stock-logica/stock-logica.controller';
import { StockLogicaService } from './stock/stock-logica/stock-logica.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entidades/producto/producto';
import { ProductoService } from './orm/producto/producto.service';

@Module({ 
  imports: [TypeOrmModule.forFeature([Producto])], 
  providers: [ProductosService, StockLogicaService, ProductoService, Producto], 
  controllers: [ProductosController, StockLogicaController]
})
export class ProductosModule {}
