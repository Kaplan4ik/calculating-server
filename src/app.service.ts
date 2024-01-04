import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getResult(number: number): number {
    return Math.pow(number, 2);
  }
}
