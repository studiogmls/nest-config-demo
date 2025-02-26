import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ConfigEnum } from 'src/constant/config.enum';

@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}
  getUser(): string {
    return `${this.configService.get(ConfigEnum.USERNAME)} - User`;
  }
  getUserById(id: string): string {
    return `${this.configService.get(ConfigEnum.USERNAME)} - User ${id}`;
  }
}
