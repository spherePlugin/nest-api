import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authPostEntity } from './entities/post.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([authPostEntity])
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthenticationModule { }
