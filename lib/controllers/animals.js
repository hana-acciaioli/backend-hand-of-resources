const { Router } = require('express');
const { Animal } = require('../models/Animal.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const animal = await Animal.getById(req.params.id);
      if (!animal) {
        next();
      }
      res.json(animal);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const animals = await Animal.getAll();
      res.json(animals);
    } catch (e) {
      next(e);
    }
  });
