const pool = require('../utils/pool');

class Place {
  id;
  latitude;
  longitude;
  timeZone;

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

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * from crazy_places
        WHERE id = $1
        `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Place(rows[0]);
  }

  static async insert({ latitude, longitude, timeZone }) {
    const { rows } = await pool.query(
      `INSERT INTO crazy_places (latitude, longitude, time_zone )
        VALUES ($1, $2, $3)
        RETURNING *`,
      [latitude, longitude, timeZone]
    );
    return new Place(rows[0]);
  }
}

module.exports = { Place };
