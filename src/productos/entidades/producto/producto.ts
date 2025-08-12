import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id : number; 

    @Column()
    nombre : string; 

    @Column('decimal', { scale: 2, precision: 10 })
    cantidad : number; 

    @Column({ default : true })
    disponible : boolean;

    @CreateDateColumn()
    creado : Date;

    @UpdateDateColumn()
    actualizado : Date;
}
