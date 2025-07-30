import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosController } from './productos/productos.controller';
import { ProductosModule } from './productos/productos.module';
import { SaludoModule } from './saludo/saludo.module';

@Module({
  imports: [ProductosModule, SaludoModule],
  controllers: [AppController, ProductosController],
  providers: [AppService],
})
export class AppModule {}
