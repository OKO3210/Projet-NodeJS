const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, minlength: [15, 'Le titre à besoin de 15 caractère minimum'] },
    author: { type: mongoose.Schema.Types.ObjectId, required: true },
    genre: { type: String, required: true, enum: ['action', 'thriller', 'manga', 'romance', 'policier', 'enfant']},
    publishDate: {type: Date, default: Date.now, required: true}
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true, minlength: [10, 'Le nom à besoin de 10 caractère'], unique: true },
    password: { type: String, required: true, trim: true, minlength: [8, 'Ce mdp à besoin de 8 caractère'] },
    role: { type: String, required: true, enum: ['utilisateur', 'administrateur'] },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;