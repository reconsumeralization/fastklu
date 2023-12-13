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

const query = (text, params) => pool.query(text, params);

export {
  query,
  pool as db,
};