const { Router } = require('express');
const { Cartoon } = require('../models/Cartoon.js');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const cartoons = await Cartoon.getAll();
      res.json(cartoons);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const cartoonsNew = await Cartoon.insert(req.body);
      res.json(cartoonsNew);
    } catch (e) {
      next(e);
    }
  });
