const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('odd-cartoons routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/odd-cartoons should return list of cartoon characters', async () => {
    const resp = await request(app).get('/odd-cartoons');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot();
  });
  afterAll(() => {
    pool.end();
  });
});
