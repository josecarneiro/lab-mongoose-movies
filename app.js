
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const logger = require('morgan');
const path = require('path');

const app = express();

// Express View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'views/partials'));



app.locals.title = 'Lab Mongoose Movies';

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// Mount base router on app, after setting up other middleware
const baseRouter = require('./routes');
app.use('/', baseRouter);

const celebs = require('./routes/celebrities');
app.use('/celebrities', celebs);

const movies = require('./routes/movies');
app.use('/movies', movies);


// catch 404 and render a not-found.hbs template
app.use((req, res, next) => {
  res.status(404);
  res.render('not-found');
});

app.use((error, req, res, next) => {
  console.error('ERROR', req.method, req.path, error);
  res.status(500);
  res.render('error');
});

module.exports = app;