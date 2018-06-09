require('dotenv').load();
require('./models/Dojo');
const app = require('./app');

import mongoose from 'mongoose';

const PORT = process.env.PORT || 25000;

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
    console.error(`ERROR - ${err.message}`);
});

// Why don't I need http createServer
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}!`)
})

let onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

app.on('error', onError)