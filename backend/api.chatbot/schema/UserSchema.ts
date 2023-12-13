import { Pool } from 'pg';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

// Load database configuration from secrets.yml
const secrets = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '../config/secrets.yml'), 'utf8'));
const dbConfig = secrets.database;

// Create a new pool using the configuration
const pool = new Pool({
  user: dbConfig.username,
  host: dbConfig.host,
  database: dbConfig.name,
  password: dbConfig.password,
  port: dbConfig.port,
});

pool.on('connect', () => {
  console.log('connected to the Database');
});

// Define the User schema
const UserSchema = `
  CREATE TABLE IF NOT EXISTS
  users(
    id UUID PRIMARY KEY,
    username VARCHAR(128) NOT NULL,
    password VARCHAR(128) NOT NULL,
    email VARCHAR(355) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP
  )
`;

// Execute the schema
pool.query(UserSchema)
  .then((res) => {
    console.log('UserTable created with result:', res);
  })
  .catch((err) => {
    console.error('Error executing UserSchema', err.stack);
  });

export default {
  query: (text, params) => pool.query(text, params),
};
