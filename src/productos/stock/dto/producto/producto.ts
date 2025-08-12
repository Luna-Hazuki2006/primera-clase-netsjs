import { IsNumber, IsString } from "class-validator";

export class Producto {
    @IsString()
    producto : string

    @IsNumber()
    cantidad : number
}
