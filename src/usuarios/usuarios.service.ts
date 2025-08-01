import { Injectable } from '@nestjs/common';
import { Creacion } from './dto/creacion/creacion';

@Injectable()
export class UsuariosService {
    private usuarios : Creacion[] = [];

    registrarUsuario(datos : Creacion) {
        const nuevoUsuario = datos;
        this.usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }
}
