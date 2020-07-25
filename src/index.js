const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

// connect to mongo
connectDB();

// settings
app.set('port', process.env.PORT || 4000 );

// middlewares
app.use( express.json({ extended: false }) );
app.use( cors() );

// routes
app.use( '/api/contacts', require('./routes/contacts'));

app.listen( app.get('port'), () => {
    console.log( 'Conected to port ' + app.get('port') );
} )