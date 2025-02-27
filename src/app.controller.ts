import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from './constant/config.enum';
import { Logger } from 'nestjs-pino';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    private readonly logger: Logger,
  ) {}

  @Get()
  getHello(): string {
    // this.logger.log('get / :', this.configService.get(ConfigEnum.USERNAME));
    // console.log('get / :', this.configService.get(ConfigEnum.USERNAME));
    // console.log('get / :', this.configService.get(ConfigEnum.TOKEN_SECRET));
    // console.log('get / :', this.configService.get(ConfigEnum.PORT));
    return this.appService.getHello();
  }
}
