import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth_post')
export class authPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: ''})
    email: string;

    @Column({ default: ''})
    password: string;
}