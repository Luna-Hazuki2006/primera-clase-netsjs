import { Body, Controller, Post, Res } from '@nestjs/common';
import { Creacion } from './dto/creacion/creacion';
import { UsuariosService } from './usuarios.service';
import { Response } from 'express';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuarios: UsuariosService) {}

    @Post('/register')
    registrar(@Body() datos : Creacion, @Res() respuesta : Response) {
        let nuevo = this.usuarios.registrarUsuario(datos)
        respuesta.json(nuevo).status(201)
    }
}
