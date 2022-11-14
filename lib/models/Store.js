// const pool = require('../utils/pool');

const pool = require('../utils/pool.js');

class Store {
  id;
  company;
  department;
  item;
  price;

  constructor(row) {
    this.id = row.id;
    this.company = row.company;
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
  static async insert({ company, department, item, price }) {
    const { rows } = await pool.query(
      `INSERT INTO cool_stores (company, department, item, price) 
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
      [company, department, item, price]
    );
    return new Store(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const store = await Store.getById(id);
    if (!store) return null;
    const updatedStore = { ...store, ...newAttrs };
    const { rows } = await pool.query(
      `UPDATE cool_stores
        SET company = $2, department = $3, item = $4, price = $5
        WHERE id = $1
        RETURNING *
        `,
      [
        id,
        updatedStore.company,
        updatedStore.department,
        updatedStore.item,
        updatedStore.price,
      ]
    );
    return new Store(rows[0]);
  }
}
module.exports = { Store };
