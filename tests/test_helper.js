const Note = require('../models/note')

const initialNotes = [
  {
    content: 'test note 1',
    important: false
  },
  {
    content: 'test note 2',
    important: true
  },
]

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovethissoon' })
  await note.save()
  await note.deleteOne()

  return note._id.toString()
}

const notesInDb = async () => {
  const notes = await Note.find({})
  return notes.map(note => note.toJSON())
}

module.exports = {
  initialNotes, nonExistingId, notesInDb
}
