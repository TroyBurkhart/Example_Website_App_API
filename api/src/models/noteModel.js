import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  date: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
