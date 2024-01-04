import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculateDto } from './calculate.dto';

@Controller('calculate')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  getResult(@Body() { number }: CalculateDto): number {
    return this.appService.getResult(number);
  }
}
