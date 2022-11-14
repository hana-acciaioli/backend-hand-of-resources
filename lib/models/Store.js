// const pool = require('../utils/pool');

const pool = require('../utils/pool.js');

class Store {
  id;
  store;
  department;
  item;
  price;

  constructor(row) {
    this.id = row.id;
    this.store = row.store;
    this.department = row.department;
    this.item = row.item;
    this.price = row.price;
  }
  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * from cool_stores;
    `);
    return rows.map((row) => new Store(row));
  }
  static async getById(id) {
    const { rows } = await pool.query(
      `
    SELECT * from cool_stores
    WHERE id = $1
    `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Store(rows[0]);
  }
}
module.exports = { Store };
