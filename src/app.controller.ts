import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('calculate')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  getHello(@Body() { number }: any): number {
    return this.appService.getHello(number);
  }
}
