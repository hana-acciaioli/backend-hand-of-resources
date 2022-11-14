const pool = require('../utils/pool');

class Car {
  id;
  car;
  currency;
  year;
  color;

  constructor(row) {
    this.id = row.id;
    this.car = row.car;
    this.currency = row.currency;
    this.year = row.year;
    this.color = row.color;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * from used_cars`);
    return rows.map((row) => new Car(row));
  }
  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * from used_cars
        WHERE id = $1`,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Car(rows[0]);
  }
}

module.exports = { Car };
