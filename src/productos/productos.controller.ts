import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { ProductosService } from "./productos.service";

@Controller('productos')
export class ProductosController {
    // constructor(private readonly productos: ProductosService) {}
    @Get(':id')
    darProductos(@Param('id') id : number) : object {
        let datos = [
            {'nombre': 'caja'}, 
            {'nombre': 'mesa'}, 
            {'nombre': 'relicario'}
        ]
        return datos[id]
    }

    @Get()
    verProductos() : Object[] {
        let datos = [
            {'nombre': 'caja'}, 
            {'nombre': 'mesa'}, 
            {'nombre': 'relicario'}
        ]
        return datos
    }

    @Post()
    mostrarProductos(@Body() datos : object) : object {
        return datos
    }
}
