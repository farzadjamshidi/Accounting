import convict from 'convict';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = convict({
  app: {
    env: {
      doc: 'The application environment',
      format: ['production', 'development', 'test'],
      default: 'development',
      env: 'NODE_ENV',
    },
    port: {
      doc: 'The port to bind',
      format: 'port',
      default: 3000,
      env: 'PORT',
    },
  },
  db: {
    host: {
      doc: 'Database host',
      format: '*',
      default: 'localhost',
      env: 'DB_HOST',
    },
    port: {
      doc: 'Database port',
      format: 'port',
      default: 5432,
      env: 'DB_PORT',
    },
    username: {
      doc: 'Database username',
      format: String,
      default: 'root',
      env: 'DB_USERNAME',
    },
    password: {
      doc: 'Database password',
      format: String,
      default: '',
      env: 'DB_PASSWORD',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'mydb',
      env: 'DB_NAME',
    },
  },
});

// Validate the configuration
config.validate({ allowed: 'strict' });

export default config;
