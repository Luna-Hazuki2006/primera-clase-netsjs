import { Injectable } from '@nestjs/common';
import { Creacion } from './dto/creacion/creacion';

@Injectable()
export class UsuariosService {
    registrarUsuario(datos : Creacion) {
        // return datos
    }
}
