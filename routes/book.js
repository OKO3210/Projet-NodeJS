const express = require('express');
const app = express();
const booksRouter = require('./routes/books');

app.use('/books', booksRouter);

/* Code vue en classe sans use 
    router.route('/')
    .post(booksController.createBook)
    .get(booksController.getAllBooks);

router.route('/:id')
    .get(booksController.getBookById)
    .put(booksController.updateBook)
    .delete(booksController.deleteBook);

router.patch('/:id/completed', booksController.markBookAsCompleted); */