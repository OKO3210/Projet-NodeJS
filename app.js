var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const booksRouter = require('./routes/books');

app.use('/books', booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.all('*', (req, res) => 
    res.status(404).json({
        status: 'fail',
        message: 'Can`t find ${req.originalUri} on this server !',
    }));

module.exports = app;
