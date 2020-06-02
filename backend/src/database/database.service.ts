import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { AppLogger } from '../app.logger';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  private logger = new AppLogger(DatabaseService.name);

  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return this.configService.get('database');
  }
}
