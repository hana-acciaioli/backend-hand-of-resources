const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/cartoons', require('./controllers/cartoons'));
app.use('/animals', require('./controllers/animals.js'));
app.use('/places', require('./controllers/places.js'));
app.use('/cars', require('./controllers/cars.js'));
app.use('/stores', require('./controllers/stores.js'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
