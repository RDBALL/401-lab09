'use strict';


const { user } = require('../../src/models/index');
const supertest = require('supertest');
const server = require('../../src/server').server;
const mockRequest = supertest(server);

describe('V2 ROUTES TESTS:', () => {
  let admin, token;

  beforeAll(async () => {
    admin = await user.create({ username: 'testAdmin', password: 'test', role: 'admin' });
    token = admin.body.token;
    console.log('---------------------------',token);
  });

  it('allow a user with bearer token create and add an item on POST/api/v2/:model', async () => {
    const response = await mockRequest.post('/api/v2/drinks').send({ beer: 'IPA'}).auth(token, { type: 'bearer' });

    expect(response.status).toEqual(201);
    expect(response.body._id).toBeDefined();
  });

  // it('should have GET/api/v2/:model w bearer token return a list of items', async () => {
  //   const response = await mockRequest.get('/api/v2/clothes').auth(token, { type: 'bearer' });

  //   expect(response.status).toEqual(200);
  //   expect(response.body[0].name).toEqual('Shirt');
  // });

  // it('should have GET/api/v2/:model/ID with bearer token return item by ID', async () => {
  //   const jacket = await mockRequest.post('/api/v2/clothes').send({ name: 'Jacket', color: 'Red', size: 'Small' }).auth(token, { type: 'bearer' });
  //   const response = await mockRequest.get(`/api/v2/clothes/${jacket.body._id}`).auth(token, { type: 'bearer' });

  //   expect(response.body._id).toEqual(jacket.body._id);
  // });

  // it('should have PUT/api/v2/:model/ID with bearer token return a single, updated item by ID', async () => {
  //   const drinks = await mockRequest.post('/api/v1/drinks').send({ Beer: null, Mixed_Drink: null, Non_Alcoholic: 'Water' }).auth(token, { type: 'bearer' });

  //   const response = await mockRequest.put(`/api/v1/clothes/${drinks.body._id}`).send({ Beer: null, Mixed_Drink: null, Non_Alcoholic: 'Water' }).auth(token, { type: 'bearer' });

  //   expect(response.body.size).toEqual('Large');
  //   expect(response.body._id).toEqual(drinks.body._id);
  // });

  // it('should have DELETE/api/v2/:model/ID with bearer token delete an item', async () => {
  //   const shoes = await mockRequest.post('/api/v1/clothes').send({ name: 'shoes', color: 'Black', size: '10' }).auth(token, { type: 'bearer' });

  //   const response = await mockRequest.delete(`/api/v1/clothes/${shoes.body._id}`).auth(token, { type: 'bearer' });

  //   expect(response.status).toEqual(200);

  //   const getResponse = await mockRequest.get(`/api/v1/clothes/${shoes.body._id}`).auth(token, { type: 'bearer' });
  //   expect(getResponse.body).toEqual(null);
  // });

});
