import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'devenv.cluster-cpdxgqt0k2w8.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'devenv',
      password: 'nz_L7Sefu=o6vln-Z.RabNFvVctWnB',
      database: 'devenv',
      schema: 'playground-nestjs-typeorm',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
