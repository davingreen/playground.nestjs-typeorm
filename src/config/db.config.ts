import { registerAs } from '@nestjs/config';
import { join } from 'path';

const region = process.env.AURORA_REGION || 'us-east-1';
const resourceArn = process.env.AURORA_RESOURCE_ARN;
const database = process.env.DB_NAME || 'postgres';
const secretArn = process.env.DB_SECRET_ARN;

export default registerAs('database', () => {
  return {
    type: 'aurora-data-api-pg',
    database,
    secretArn,
    resourceArn,
    region,
    schema: 'playground',
    autoLoadEntities: true,
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    migrations: ['src/migrations/**/*.ts'],
    cli: {
      migrationsDir: 'src/migrations',
    },
    formatOptions: {
      castParameters: true,
      enableUuidHack: true,
    },
    synchronize: true,
    logging: true,
  };
});
