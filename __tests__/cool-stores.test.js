const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('cool-stores routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /stores should return a list of stores', async () => {
    const resp = await request(app).get('/stores');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "department": "Clothing",
          "id": "1",
          "item": "shoe lace",
          "price": "$4.60",
        },
        Object {
          "department": "Home",
          "id": "2",
          "item": "throw pillow",
          "price": "$19.46",
        },
        Object {
          "department": "Jewelry",
          "id": "3",
          "item": "nose ring",
          "price": "$2.34",
        },
        Object {
          "department": "Electronics",
          "id": "4",
          "item": "VHS camera",
          "price": "$14.19",
        },
        Object {
          "department": "Music",
          "id": "5",
          "item": "Beach Boys",
          "price": "$14.34",
        },
      ]
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
