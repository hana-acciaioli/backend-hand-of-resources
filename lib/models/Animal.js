const pool = require('../utils/pool');

class Animal {
  id;
  name;
  color;
  animal_type;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.color = row.color;
    this.animal_type = row.animal_type;
  }

  static async getAll() {
    const { rows } = await pool.query(`
        SELECT * from silly_animals;
        `);
    return rows.map((row) => new Animal(row));
  }
  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * from silly_animals
        WHERE id = $1
        `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Animal(rows[0]);
  }
}

module.exports = { Animal };
