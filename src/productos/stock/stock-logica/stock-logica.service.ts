import { Injectable } from '@nestjs/common';
import { Producto } from '../dto/producto/producto';

@Injectable()
export class StockLogicaService {
    private inventario : Producto[] = [
        { producto: 'Monitor', cantidad: 10 },
        { producto: 'Teclado', cantidad: 25 },
    ];

    listar() {
        return this.inventario
    }

    obtenerCantidad(producto : string) {
        const item = this.inventario.find(i => i.producto === producto);
        return item ? item.cantidad : 0;
    }

    agregarProducto(dto : Producto) {
        this.inventario.push(dto);
        return { mensaje: 'Producto agregado', producto: dto };
    }
}
