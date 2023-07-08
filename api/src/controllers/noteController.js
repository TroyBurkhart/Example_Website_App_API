import NoteModel from '../models/noteModel';

export async function createNote(noteFields) {
  const newNote = new NoteModel();
  newNote.title = noteFields.title;
  newNote.date = noteFields.date;

  try {
    const savedNote = await newNote.save();
    return savedNote;
  } catch (error) {
    throw new Error(`create note error: ${error}`);
  }
}
export async function getNotes() {
  const notes = await NoteModel.find();
  return notes;
}
export async function deleteNote(id) {
  console.log('fdleteing');
  const note = await NoteModel.findByIdAndDelete(id);
  const notes = await NoteModel.find();
  return notes;
}
