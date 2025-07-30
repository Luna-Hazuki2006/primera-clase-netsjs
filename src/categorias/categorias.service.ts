import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoriasService {
    private categorias = ['categoria 1', 'categoria 2', 'categoria 3', 'categoria 4',];

    verCategoria(id : number) {
        if (id % 1 != 0) throw new BadRequestException()
        if (id > this.categorias.length - 1 || id < 0) throw new NotFoundException()
        return this.categorias[id];
    }

    listarCategorias() {
        return this.categorias
    }

    guardarCategorias(data: string) {
        const newCategoria = data;
        this.categorias.push(newCategoria);
        return newCategoria;
    }
}
