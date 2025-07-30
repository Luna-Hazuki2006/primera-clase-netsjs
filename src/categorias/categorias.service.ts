import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriasService {
  private categorias = ['categoria 1', 'categoria 2', 'categoria 3', 'categoria 4',];

    verCategoria() {
        return this.categorias;
    }

    listarCategorias() {
        return
    }

    guardarCategorias(data: string) {
        const newCategoria = data;
        this.categorias.push(newCategoria);
        return newCategoria;
    }
}
