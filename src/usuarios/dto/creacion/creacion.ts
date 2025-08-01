import { IsEmail, IsString } from "class-validator";

// Le creé especificamente para el usuarios
export class Creacion {
    @IsEmail()
    email : string

    @IsString()
    nombre_completo : string
}
