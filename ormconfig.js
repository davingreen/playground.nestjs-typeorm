const region = process.env.AURORA_REGION || 'us-east-1';
const resourceArn = process.env.AURORA_RESOURCE_ARN;
const database = process.env.DB_NAME || 'postgres';
const secretArn = process.env.DB_SECRET_ARN;

module.exports = {
  type: 'aurora-data-api-pg',
  database,
  secretArn,
  resourceArn,
  region,
  schema: 'playground',
  entities: [
    __dirname + '/dist/**/*.entity.js',
  ],
  migrations: ['migrations/**/*.ts'],
  subscribers: ['subscriber/**/*.ts', 'dist/subscriber/**/.js'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'migrations',
    subscribersDir: 'subscriber',
  },
  formatOptions: {
    castParameters: true,
    enableUuidHack: true,
  },
  synchronize: true,
  logging: true,
};
