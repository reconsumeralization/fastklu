import { Pool } from 'pg';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

class BaseRepository {
  protected table: string;
  protected pool: Pool;

  constructor(table: string) {
    this.table = table;
    const secrets = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '../config/secrets.yml'), 'utf8'));
    const dbConfig = secrets.database;
    this.pool = new Pool({
      user: dbConfig.username,
      host: dbConfig.host,
      database: dbConfig.name,
      password: dbConfig.password,
      port: dbConfig.port,
    });
  }

  async query(text, params) {
    const client = await this.pool.connect();
    try {
      const res = await client.query(text, params);
      return res.rows;
    } finally {
      client.release();
    }
  }
}

export { BaseRepository };
