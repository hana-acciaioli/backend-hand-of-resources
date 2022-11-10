const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('silly-cartoons routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /animals should return a list of animals', async () => {
    const resp = await request(app).get('/animals');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "animal_type": "Seven-banded armadillo",
          "color": "Khaki",
          "id": "1",
          "name": "Bell",
        },
        Object {
          "animal_type": "North American red fox",
          "color": "Red",
          "id": "2",
          "name": "Helenelizabeth",
        },
        Object {
          "animal_type": "Blue shark",
          "color": "Purple",
          "id": "3",
          "name": "Korella",
        },
        Object {
          "animal_type": "Swamp deer",
          "color": "Purple",
          "id": "4",
          "name": "Aharon",
        },
        Object {
          "animal_type": "Ferret, black-footed",
          "color": "Turquoise",
          "id": "5",
          "name": "Alika",
        },
        Object {
          "animal_type": "Macaw, red and blue",
          "color": "Green",
          "id": "6",
          "name": "Billy",
        },
      ]
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
