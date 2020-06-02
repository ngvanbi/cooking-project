interface DatabaseConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: [string];
  synchronize: boolean;
}

interface Configuration {
  port: number;
  isProduction: boolean;
  salt: number;
  logger: {
    level: string;
  };
  database: DatabaseConfig;
}

export const Config = (): Configuration => ({
  port: parseInt(process.env.APP_PORT, 10) || 5000,
  isProduction: process.env.NODE_ENV === 'production',
  salt: parseInt(process.env.APP_SALT, 10) || 10,
  logger: {
    level: process.env.NODE_ENV === 'production' ? process.env.APP_LOGGER_LEVEL : 'debug',
  },
  database: {
    type: process.env.APP_DATABASE_TYPE,
    host: process.env.APP_DATABASE_HOST,
    port: parseInt(process.env.APP_DATABASE_PORT, 10) || 5432,
    username: process.env.APP_DATABASE_USER,
    password: process.env.APP_DATABASE_PASSWORD,
    database: process.env.APP_DATABASE_DB,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  },
});

export default { Config };
