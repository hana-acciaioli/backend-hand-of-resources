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

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * from odd_cartoons
        WHERE id = $1
        `,
      [id]
    );
    return new Cartoon(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const cartoon = await Cartoon.getById(id);
    if (!cartoon) return null;
    const updatedCartoon = { ...cartoon, ...newAttrs };
    const { rows } = await pool.query(
      `UPDATE odd_cartoons
        SET name = $2, catch_phrase = $3, avatar = $4
        WHERE id = $1
        RETURNING *
        `,
      [
        id,
        updatedCartoon.name,
        updatedCartoon.catch_phrase,
        updatedCartoon.avatar,
      ]
    );
    return new Cartoon(rows[0]);
  }
}

module.exports = { Cartoon };
