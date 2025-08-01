import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ProductosService } from "./productos.service";
import { CreateProducto } from './dto/create-producto/create-producto';
import { Response } from 'express';
// nope, no lo agarra
// Repita eso porfa 
@Controller('productos')
export class ProductosController {
    constructor(private readonly productos: ProductosService) {}

    @Get(':id')
    darProductos(@Param('id') id : number) : object {
        return this.productos.verProducto(id)
    }

    @Get()
    verProductos() : object[] {
        return this.productos.listarProductos()
    }
// todo lo que ve en la terminal
    @Post()
    mostrarProductos(@Body() datos : CreateProducto, @Res() respuesta : Response) {
        respuesta.status(998).json(this.productos.guardarProducto(datos))        // return respuesta
    }
}
