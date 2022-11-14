const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('cars routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /cars should return a list of cars', async () => {
    const resp = await request(app).get('/cars');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "car": "Aspire",
          "color": "Turquoise",
          "currency": "Ruble",
          "id": "1",
          "year": "1996",
        },
        Object {
          "car": "4Runner",
          "color": "Yellow",
          "currency": "Rupiah",
          "id": "2",
          "year": "1994",
        },
        Object {
          "car": "Mustang",
          "color": "Puce",
          "currency": "Krona",
          "id": "3",
          "year": "2006",
        },
        Object {
          "car": "Town & Country",
          "color": "Pink",
          "currency": "Dollar",
          "id": "4",
          "year": "2008",
        },
        Object {
          "car": "XG300",
          "color": "Turquoise",
          "currency": "Yuan Renminbi",
          "id": "5",
          "year": "2001",
        },
      ]
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
