import { Body, Controller, Post, Res } from '@nestjs/common';
import { Creacion } from './dto/creacion/creacion';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuarios: UsuariosService) {}

    @Post('/register')
    registrar(@Body() datos : Creacion, @Res() respuesta : Response) {

    }
}
