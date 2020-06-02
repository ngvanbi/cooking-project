import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';
import { Config } from './config/configuration';
import { AppLogger } from './app.logger';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [DatabaseModule],
      useExisting: DatabaseService,
    }),
    AuthModule,
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  private logger = new AppLogger(AppModule.name);

  constructor() {
    this.logger.log('Initialize constructor');
  }
}
