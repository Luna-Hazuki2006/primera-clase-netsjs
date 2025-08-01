import { IsNumber, IsString } from "class-validator";
// ¿Hay algún error aquí? 
export class CreateProducto {
    @IsString()
    nombre : string

    @IsNumber()
    precio : number
}
