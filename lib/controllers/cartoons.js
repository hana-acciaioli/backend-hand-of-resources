const { Router } = require('express');
const { Cartoon } = require('../models/Cartoon.js');

module.exports = Router()
  //   .get('/id', async (req, res, next) => {
  //     try {
  //       const cartoon = await Cartoon.getById(req.params.id);
  //       res.json(cartoon);
  //     } catch (e) {
  //       next(e);
  //     }
  //   })
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
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedCartoon = await Cartoon.updateById(req.params.id, req.body);
      res.json(updatedCartoon);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deleteCartoon = await Cartoon.deleteById(req.params.id);
      res.json(deleteCartoon);
    } catch (e) {
      next(e);
    }
  });
