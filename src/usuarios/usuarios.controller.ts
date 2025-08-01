import { Body, Controller, Post, Res } from '@nestjs/common';
import { Creacion } from './dto/creacion/creacion';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuarios: UsuariosController) {}

    @Post('/register')
    mostrarProductos(@Body() datos : Creacion, @Res() respuesta : Response) {
        // return respuesta
    }
}
