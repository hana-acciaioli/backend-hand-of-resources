const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('odd-cartoons routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /cartoons/1 should return a detailed object of cartoon 1', async () => {
    const resp = await request(app).get('/cartoons/1');
    expect(resp.body).toEqual({
      avatar: 'https://robohash.org/abomnisassumenda.png?size=50x50&set=set1',
      catch_phrase: 'Mandatory user-facing protocol',
      id: '1',
      name: 'The rigid nerd',
    });
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
        Object {
          "avatar": "https://robohash.org/ipsumdelenitiid.png?size=50x50&set=set1",
          "catch_phrase": "Devolved interactive contingency",
          "id": "2",
          "name": "The pessimst",
        },
        Object {
          "avatar": "https://robohash.org/istequibusdamquod.png?size=50x50&set=set1",
          "catch_phrase": "Adaptive asynchronous projection",
          "id": "3",
          "name": "The woke analyst",
        },
        Object {
          "avatar": "https://robohash.org/molestiasdebitisesse.png?size=50x50&set=set1",
          "catch_phrase": "Assimilated web-enabled orchestration",
          "id": "4",
          "name": "The troll",
        },
        Object {
          "avatar": "https://robohash.org/rationereprehenderittotam.png?size=50x50&set=set1",
          "catch_phrase": "Future-proofed demand-driven workforce",
          "id": "5",
          "name": "The workoholic manager",
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

  it('DELETE /cartoons/:id should delete a cartoon', async () => {
    const resp = await request(app).delete('/cartoons/1');
    expect(resp.status).toBe(200);

    const cartoonResp = await request(app).get('/cartoons/1');
    expect(cartoonResp.status).toBe(404);
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
