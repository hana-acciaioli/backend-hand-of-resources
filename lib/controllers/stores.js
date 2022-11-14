const { Router } = require('express');
const { Store } = require('../models/Store.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const store = await Store.getById(req.params.id);
      if (!store) {
        next();
      }
      res.json(store);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const stores = await Store.getAll();
      res.json(stores);
    } catch (e) {
      next(e);
    }
  });
