import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

const region = process.env.AURORA_REGION || 'us-east-1';
const resourceArn = process.env.AURORA_RESOURCE_ARN;
const database = process.env.DB_NAME || 'postgres';
const secretArn = process.env.DB_SECRET_ARN;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'aurora-data-api-pg',
      database,
      secretArn,
      resourceArn,
      region,
      entities: [User],
      synchronize: true,
      logging: true,
      formatOptions: {
        castParameters: true,
        enableUuidHack: true,
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
