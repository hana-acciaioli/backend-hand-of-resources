const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('odd-cartoons routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /cartoons should return list of cartoon characters', async () => {
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

  it('POST /cartoons should create a new cartoon', async () => {
    const newCartoon = {
      name: 'The internet hype entrepreneur',
      catch_phrase: 'Implemented attitude-oriented internet solution',
      avatar: 'https://robohash.org/possimuseosnumquam.png?size=50x50&set=set1',
    };
    const resp = await request(app).post('/cartoons').send(newCartoon);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newCartoon,
    });
  });

  it('PUT /cartoons/:id should update an existing cartoon', async () => {
    const resp = await request(app).put('/cartoons/1').send({
      name: 'The control freak IT person',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.name).toBe('The control freak IT person');
  });

  afterAll(() => {
    pool.end();
  });
});
