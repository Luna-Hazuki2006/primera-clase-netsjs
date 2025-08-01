import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProducto } from './dto/create-producto/create-producto';

// este es el servicio
// profe dice que es la dependencia pero no sé qué pasa
@Injectable()
export class ProductosService {
    private productos = new Array()

    listarProductos() {
        return this.productos
    }

    verProducto(id : number) : object[] {
        if (id % 1 != 0 ) throw new BadRequestException()
        if (id > this.productos.length || id <= 0) throw new NotFoundException()
        return this.productos.filter((este) => este['id'] == btoa(`${id}`))
    }

    guardarProducto(data : CreateProducto) {
        let nuevoProducto = {
            id: btoa(`${this.productos.length + 1}`), 
            ...data
        }
        this.productos.push(nuevoProducto)
        return nuevoProducto
    }
}
