import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(number: any): number {
    return Math.pow(number, 2);
  }
}
