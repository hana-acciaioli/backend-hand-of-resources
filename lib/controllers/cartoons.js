const { Router } = require('express');
const { Cartoon } = require('../models/Cartoon.js');

module.exports = Router().get('/', async (req, res) => {
  const cartoons = await Cartoon.getAll();
  res.json(cartoons);
});
