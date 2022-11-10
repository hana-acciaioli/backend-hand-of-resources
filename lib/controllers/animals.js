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
  })
  .post('/', async (req, res, next) => {
    try {
      const animalNew = await Animal.insert(req.body);
      res.json(animalNew);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedAnimal = await Animal.updateById(req.params.id, req.body);
      res.json(updatedAnimal);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deleteAnimal = await Animal.deleteById(req.params.id);
      res.json(deleteAnimal);
    } catch (e) {
      next(e);
    }
  });
