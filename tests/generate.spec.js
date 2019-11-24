const request = require('supertest');
const app = require('../app');

describe('GENERATE PDF', () => {
  const generatepdf = '/generatepdf';
  it('GENERATE PDF (ROOT)', async () => {
    const response = await request(app)
      .get('/')
      .send();
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.status).toBe(200);
    expect(response.body.message).toBe('Welcome... I am happy!!!');
  });

  it('GENERATE PDF (POST)', async () => {
    const response = await request(app)
      .post(generatepdf)
      .send({
        name: 'test'
      });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe(201);
    expect(response.body.message).toBe('PDF Successfully created');
  });
});
