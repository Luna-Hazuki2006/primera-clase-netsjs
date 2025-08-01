import { IsEmail, IsString } from "class-validator";

export class Creacion {
    @IsEmail()
    email : string

    @IsString()
    nombre_completo : string
}
