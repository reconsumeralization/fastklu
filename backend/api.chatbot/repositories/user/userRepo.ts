const BaseRepository = require('../baseRepository');
const db = require('../../models/db');

class UserRepository extends BaseRepository {
  constructor() {
    super('users');
  }

  async findByUsername(username) {
    const query = `SELECT * FROM ${this.table} WHERE username = $1`;
    const { rows } = await db.query(query, [username]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }

  async findByEmail(email) {
    const query = `SELECT * FROM ${this.table} WHERE email = $1`;
    const { rows } = await db.query(query, [email]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }
}

module.exports = new UserRepository();