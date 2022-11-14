// const pool = require('../utils/pool');

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
}
module.exports = { Store };
