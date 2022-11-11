const pool = require('../utils/pool');

class Place {
  id;
  latitude;
  longitude;
  time_zone;

  constructor(row) {
    this.id = row.id;
    this.latitude = row.latitude;
    this.longitude = row.longitude;
    this.timeZone = row.time_zone;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * from crazy_places;
    `);
    return rows.map((row) => new Place(row));
  }
}

module.exports = { Place };
