require('babel-register')({ ignore: /\/(build|node_modules)\//, presets: ['react-app'] });

import bodyParser from 'body-parser';
import session from 'express-session';
import compression from 'compression';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

// import corsOptions from './config/cors';
// import redirectHttpToHttps from './config/redirect-http-to-https';

import { api, web }  from './routes';
// import pageLoader  from './routes/web/page-loader';

const MongoStore = require('connect-mongo')(session);

const app = express();

// Support Gzip
app.use(compression());

// Suport post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Setup logger
app.use(morgan('combined'))

// Redirect http to https
// app.use('/', redirectHttpToHttps);

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Set up CORS
// app.use(cors(corsOptions))

// Set the main app routes
// app.use('/', web);

// Set the API routes
app.use('/api', api);

app.use(session({
	secret: process.env.SECRET,
	key: process.env.KEY,
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Always return the main index.html, so react-router render the route in the client
// app.use('/', pageLoader);
// TODO: Set up SSR and CORS stuff
// TODO: Replace babel stuff for production - https://github.com/babel/example-node-server

module.exports = app;