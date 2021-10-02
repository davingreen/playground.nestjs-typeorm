import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
const ormConfig = require('../ormconfig');

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
