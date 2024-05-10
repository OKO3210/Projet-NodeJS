const Book = require('../models/Book');

exports.createBook = async function(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json({
            status: 'success', 
            data: { book: newBook }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail', 
            message: error.message
        });
    }
};

exports.getAllBooks = async function (req, res) {
    try {
        const books = await Book.find();
        res.status(200).json({
            status: 'success', 
            result: books.length, 
            data: { books }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail', 
            message: error.message
        });
    }
};

exports.getBookById = async function(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json({
            status: 'success', 
            data: { book }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail', 
            message: error.message
        });
    }
};

exports.updateBook = async function(req, res) {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new : true });
        res.status(200).json({
            status: 'success', 
            data: { book: updatedBook }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail', 
            message: error.message
        });
    }
};

exports.deleteBook = async function (req, res) {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success', 
            data: null
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail', 
            message: error.message
        });
    }
};

exports.markBookAsCompleted = async function (req, res) {
    try {
        const completedBook = await Book.findOneAndUpdate(req.body.id, { completed: true }, { new: true });
        res.status(200).json({ status: 'success', data: { book: completedBook } });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
};
