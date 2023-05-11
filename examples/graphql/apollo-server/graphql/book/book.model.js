import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const Book = mongoose.model('Book', BookSchema);

export default Book;
