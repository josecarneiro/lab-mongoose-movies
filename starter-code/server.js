#!/usr/bin/env node

require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

const databaseURI = 'mongodb://localhost:27017/celebrity';

mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongoose connection established.');
    const server = app.listen(3000, () => {
      console.log(`Listening on http://localhost:${3000}`);
    });
    server.on('error', error => {
      if (error.syscall !== 'listen') throw error;
      switch (error.code) {
        case 'EADDRINUSE':
          console.error(`Port ${process.env.PORT} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    });
  })
  .catch(error => {
    console.error('Error connecting to mongo', error);
  });
