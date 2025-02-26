import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import * as dotenv from 'dotenv';
import * as Joi from 'joi';

const envPath = `.env.${process.env.NODE_ENV || 'development'}`;
console.log('envPath:', envPath);

@Module({
  imports: [
    ConfigModule.forRoot({
      // 参考文档：https://docs.nestjs.com/techniques/configuration
      // 配置全局,否则UserMoudule无法访问
      isGlobal: true,
      // 动态设置环境变量，使用数组前面优先级高
      envFilePath: [envPath, '.env'],
      // 加载默认环境变量,使用load无法进行校验
      // load: [() => dotenv.config({ path: '.env' })],
      // 环境变量验证
      // 文档地址：https://docs.nestjs.com/techniques/configuration#schema-validation
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
