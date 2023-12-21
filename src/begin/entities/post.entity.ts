import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('begin_post')
export class BeginPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: ''})
    email: string;

    @Column({ default: ''})
    password: string;
}