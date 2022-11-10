const pool = require('../utils/pool');

class Cartoon {
  id;
  name;
  catch_phrase;
  avatar;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.catch_phrase = row.catch_phrase;
    this.avatar = row.avatar;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from odd_cartoons');
    return rows.map((row) => new Cartoon(row));
  }
}

module.exports = { Cartoon };
