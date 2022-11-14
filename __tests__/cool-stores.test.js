const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('cool-stores routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /stores/1 should return a detailed object of store 1', async () => {
    const resp = await request(app).get('/stores/1');
    expect(resp.body).toEqual({
      company: 'Kuvalis Group',
      department: 'Clothing',
      id: '1',
      item: 'shoe lace',
      price: '$4.60',
    });
  });
  it('GET /stores should return a list of stores', async () => {
    const resp = await request(app).get('/stores');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "company": "Kuvalis Group",
          "department": "Clothing",
          "id": "1",
          "item": "shoe lace",
          "price": "$4.60",
        },
        Object {
          "company": "Feeney, Abbott and Bednar",
          "department": "Home",
          "id": "2",
          "item": "throw pillow",
          "price": "$19.46",
        },
        Object {
          "company": "Will, Mohr and Konopelski",
          "department": "Jewelry",
          "id": "3",
          "item": "nose ring",
          "price": "$2.34",
        },
        Object {
          "company": "Lueilwitz Group",
          "department": "Electronics",
          "id": "4",
          "item": "VHS camera",
          "price": "$14.19",
        },
        Object {
          "company": "Upton and Sons",
          "department": "Music",
          "id": "5",
          "item": "Beach Boys",
          "price": "$14.34",
        },
      ]
    `);
  });
  it('POST /stores should create a new store', async () => {
    const newStore = {
      company: 'Gorczany-Stanton',
      department: 'Baby',
      item: 'diapers',
      price: '$12.51',
    };
    const resp = await request(app).post('/stores').send(newStore);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newStore,
    });
  });
  afterAll(() => {
    pool.end();
  });
});
