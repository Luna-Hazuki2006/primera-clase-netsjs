import { Module } from '@nestjs/common';
import { SaludoService } from './saludo.service';
import { SaludoController } from './saludo.controller';

@Module({
  providers: [SaludoService],
  controllers: [SaludoController]
})
export class SaludoModule {}
