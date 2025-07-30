import { Controller, Get } from '@nestjs/common';
import { SaludoService } from "./saludo.service";

@Controller('saludo')
export class SaludoController {
    constructor(private readonly saludos: SaludoService) {}
    @Get()
    obtenerSaludo() {
        return this.saludos.obtenerSaludo();
    }

    @Get('/prueba')
    prueba() {
        let lista = []
        return lista[4][8];
    }
}