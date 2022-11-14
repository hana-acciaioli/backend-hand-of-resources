const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('crazy-places routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /places/1', async () => {
    const resp = await request(app).get('/places/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '1',
      latitude: '62.3078106',
      longitude: '22.0530364',
      timeZone: 'Europe/Helsinki',
    });
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

  it('POST /places should create a new place', async () => {
    const newPlace = {
      longitude: '-10.9207843',
      latitude: '-76.0594972',
      timeZone: 'America/Lima',
    };
    const resp = await request(app).post('/places').send(newPlace);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newPlace,
    });
  });

  it('DELETE /places/:id should delete a place', async () => {
    const resp = await request(app).delete('/places/1');
    expect(resp.status).toBe(200);

    const placeResp = await request(app).get('/places/1');
    expect(placeResp.status).toBe(404);
  });

  it('PUT /places/:id should update an existing place', async () => {
    const resp = await request(app).put('/places/1').send({
      timeZone: 'America/Lima',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.timeZone).toBe('America/Lima');
  });
  afterAll(() => {
    pool.end();
  });
});
