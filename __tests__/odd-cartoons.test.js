const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('odd-cartoons routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/odd-cartoons should return list of cartoon characters', async () => {
    const resp = await request(app).get('/cartoons');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "avatar": "https://robohash.org/abomnisassumenda.png?size=50x50&set=set1",
          "catch_phrase": "Mandatory user-facing protocol",
          "id": "1",
          "name": "The rigid nerd",
        },
      ]
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
