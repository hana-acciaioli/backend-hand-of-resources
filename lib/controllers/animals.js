const { Router } = require('express');
const { Animal } = require('../models/Animal.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const animals = await Animal.getAll();
    res.json(animals);
  } catch (e) {
    next(e);
  }
});
