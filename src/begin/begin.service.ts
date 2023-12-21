import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BeginPostEntity } from './entities/post.entity';
import { Repository } from 'typeorm';
import { BeginDto } from './dto/begin.dto';

@Injectable()
export class BeginService {
    constructor(
        @InjectRepository(BeginPostEntity)
        private readonly beginPostRepository: Repository<BeginPostEntity>
    ) { }

    // for test
    async test(query: BeginDto) {
        const SQL = `SELECT * FROM nuxtproject.newusers WHERE id = ${query['id']};`
        const result = await this.beginPostRepository.query(SQL);
        if (result && result.length > 0) return result;
        return null;
    }

    // register for new account
    async register(query: BeginDto) {
        const input_email = query['email']
        const input_password = query['password']
        const SQL = `INSERT INTO nuxtproject.newusers(email, password) VALUES ('${input_email}', '${input_password}')`
        const result = await this.beginPostRepository.query(SQL);
        if (result && result.length > 0) return result;
        return null;
    }
}
