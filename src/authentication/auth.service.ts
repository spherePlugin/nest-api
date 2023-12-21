import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { authPostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(authPostEntity)
        private readonly authPostRepository: Repository<authPostEntity>
    ) { }

    // register for new account
    async register(query: RegisterDto) {

        // set variable
        const input_email = query['email']
        const input_password = query['password']

        // insert data to database
        const SQL = `INSERT INTO nuxtproject.newusers(email, password) VALUES ('${input_email}', '${input_password}')`
        const result = await this.authPostRepository.query(SQL);
        if (result && result.length > 0) return result;
        return null;
    }

    // register for new account
    async login(query: RegisterDto) {

        // access tools
        bodyParser.json()
        cookieParser()
        session({
            secret: 'secret',
            resave: false,
            saveUninitialized: true
        })
        
        const secret = process.env.SECRET

        // set variable
        const input_email = query['email']
        const input_password = query['password']
        const SQL = `SELECT * FROM nuxtproject.newusers WHERE email = '${input_email}'`
        const result = await this.authPostRepository.query(SQL);

        const match = input_password.localeCompare(result[0].password)

        if (match != 0) {
            const message = "Invalid password"
            console.log("Invalid password")
            return {message}
        } else {
            const message = "Login success!"
            console.log("Login success!")
            return {message, statusCode: 200}
        }
    }

    // all user data
    async userRecord() {
        const SQL = `SELECT * FROM nuxtproject.newusers;`
        const result = await this.authPostRepository.query(SQL);
        if (result && result.length > 0) return result;
        return null;
    }
}
