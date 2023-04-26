const { Schema, model } = require('mongoose')

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minlength: [1, 'Title short'],
      maxlength: [20, 'Title under max length'],
    },
    body: {
      type: String,
      required: [true, 'Title is required'],
      minlength: [1, 'Title short'],
      maxlength: [30, 'Title under max length'],
    },
    completed: {
      type: Boolean,
      required: false,
      default: false
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  })

const Todo = model('todo', todoSchema)

module.exports = Todo