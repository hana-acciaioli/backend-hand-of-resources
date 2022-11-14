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
  static async insert({ car, color, currency, year }) {
    const { rows } = await pool.query(
      `INSERT INTO used_cars (car, color, currency, year)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
      [car, color, currency, year]
    );
    return new Car(rows[0]);
  }
  static async updateById(id, newAttrs) {
    const car = await Car.getById(id);
    if (!car) return null;
    const updatedCar = { ...car, ...newAttrs };
    const { rows } = await pool.query(
      `UPDATE used_cars
      SET car = $2, color = $3, currency = $4, year = $5
      WHERE id = $1
      RETURNING *`,
      [
        id,
        updatedCar.car,
        updatedCar.color,
        updatedCar.currency,
        updatedCar.year,
      ]
    );
    return new Car(rows[0]);
  }
}

module.exports = { Car };
