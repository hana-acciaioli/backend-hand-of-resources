const { Router } = require('express');
const { Store } = require('../models/Store.js');
const pool = require('../utils/pool.js');

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
  })
  .post('/', async (req, res, next) => {
    try {
      const newStore = await Store.insert(req.body);
      res.json(newStore);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deletedStore = await Store.deleteById(req.params.id);
      res.json(deletedStore);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedStore = await Store.updateById(req.params.id, req.body);
      res.json(updatedStore);
    } catch (e) {
      next(e);
    }
  });
