import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('index')
  root() {
    return { message: 'Hello world11222223333211!' };
  }

}
