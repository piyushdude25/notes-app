import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Notes from './components/Notes';
import EditModel from './components/EditModel';
import { useState } from 'react';
import Que from './components/que';

export default function App() {

const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")
const [notes, setNotes] = useState(getNotesFormLs)
// console.log("notes",notes)
const [editId, setEditId] = useState("")

localStorage.setItem("notes", JSON.stringify(notes))


  return (
    <>
      {/* <Que/> */}
      <EditModel editId={editId} notes={notes} setNotes={setNotes} />
     <Navbar/>
     <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} />
     {/* <Notes/> */}
     <div>
      <h1>Your Notes</h1>
      {
        notes.length === 0 ? (<div>
          <div>
            <h5>Messages</h5>
            <p>No notes are Available</p>
          </div>
        </div>):(notes.map((element)=>{
          return(
            <Notes element={element} key={element.id} notes={notes} setNotes={setNotes} setEditId={setEditId} />
          )
        }))
      }
     </div>
    </>
  );

function getNotesFormLs(){
  const note = JSON.parse(localStorage.getItem("notes"))
  if(note){
    return note
  }else{
    return[]
  }
}

}


