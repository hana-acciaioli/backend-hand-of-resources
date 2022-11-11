const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('crazy-places routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /places should return list of places', async () => {
    const resp = await request(app).get('/places');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "latitude": "62.3078106",
          "longitude": "22.0530364",
          "timeZone": "Europe/Helsinki",
        },
        Object {
          "id": "2",
          "latitude": "58.4536208",
          "longitude": "33.3707377",
          "timeZone": "Europe/Moscow",
        },
        Object {
          "id": "3",
          "latitude": "11.9704485",
          "longitude": "-86.0886366",
          "timeZone": "America/Managua",
        },
        Object {
          "id": "4",
          "latitude": "60.053638",
          "longitude": "29.9846651",
          "timeZone": "Europe/Moscow",
        },
        Object {
          "id": "5",
          "latitude": "51.3854243",
          "longitude": "20.9619096",
          "timeZone": "Europe/Warsaw",
        },
      ]
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
