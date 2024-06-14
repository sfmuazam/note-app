import React, { useState } from 'react';
import Home from '@/src/screens/home';
import AddNote from '@/src/screens/addNote';
import EditNote from '@/src/screens/editNote';

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  deleteNote,
  selectedNote,
  setSelectedNote
}) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setSelectedNote={setSelectedNote} />;
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote note={selectedNote} setCurrentPage={setCurrentPage} editNote={editNote} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
  };

  const editNote = (id, title, desc) => {
    const updatedNotes = noteList.map(note => 
      note.id === id ? { ...note, title, desc } : note
    );
    setNoteList(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = noteList.filter(note => note.id !== id);
    setNoteList(updatedNotes);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      selectedNote={selectedNote}
      setSelectedNote={setSelectedNote}
    />
  );
};

export default App;
