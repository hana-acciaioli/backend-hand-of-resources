const { Router } = require('express');
const { Store } = require('../models/Store.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const stores = await Store.getAll();
    res.json(stores);
  } catch (e) {
    next(e);
  }
});
