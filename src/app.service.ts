import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Check service at /service/what-on-the-land/info';
  }
}
