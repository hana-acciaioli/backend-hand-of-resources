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

  static async insert({ name, catch_phrase, avatar }) {
    const { rows } = await pool.query(
      `INSERT INTO odd_cartoons (name, catch_phrase, avatar)
        VALUES ($1, $2, $3)
        RETURNING *`,
      [name, catch_phrase, avatar]
    );
    return new Cartoon(rows[0]);
  }
}

module.exports = { Cartoon };
