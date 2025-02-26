import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from './constant/config.enum';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    console.log('get / :', this.configService.get(ConfigEnum.USERNAME));
    console.log('get / :', this.configService.get(ConfigEnum.TOKEN_SECRET));
    console.log('get / :', this.configService.get(ConfigEnum.PORT));

    return this.appService.getHello();
  }
}
