const { Router } = require('express');
const { Place } = require('../models/Place.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const place = await Place.getById(req.params.id);
      if (!place) {
        next();
      }
      res.json(place);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const places = await Place.getAll();
      res.json(places);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const placeNew = await Place.insert(req.body);
      res.json(placeNew);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedPlace = await Place.updateById(req.params.id, req.body);
      res.json(updatedPlace);
    } catch (e) {
      next(e);
    }
  });
