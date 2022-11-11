const { Router } = require('express');
const { Place } = require('../models/Place.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const places = await Place.getAll();
    res.json(places);
  } catch (e) {
    next(e);
  }
});
