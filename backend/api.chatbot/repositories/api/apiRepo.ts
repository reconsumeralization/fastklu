import { BaseRepository } from '../baseRepository';
import { query } from '../../models/db';

class ApiRepository extends BaseRepository {
  constructor() {
    super('api');
  }

  async findByName(name) {
    const queryStr = `SELECT * FROM ${this.table} WHERE name = $1`;
    const { rows } = await query(queryStr, [name]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }

  async updateByName(name, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    values.push(name);
    const placeholder = keys.map((_, i) => `${keys[i]} = $${i + 2}`).join(', ');
    const queryStr = `UPDATE ${this.table} SET ${placeholder} WHERE name = $1 RETURNING *`;
    const { rows } = await query(queryStr, values);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }
}

export default new ApiRepository();
