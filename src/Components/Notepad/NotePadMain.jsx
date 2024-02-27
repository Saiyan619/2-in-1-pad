import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Note from './Note'
import './notepadmain.css'


const getLocalStorage = () => {
    let noteList = localStorage.getItem("noteList");
    if (noteList) {
      return (noteList = JSON.parse(localStorage.getItem("noteList")))
    } else {
      return [];
    }
  }
  
  
export default function NotePadMain() {
    const [noteInput, setnoteInput] = useState('')
    const [newNote, setnewNote] = useState(getLocalStorage());
    const [beginNote, setbeginNote] = useState(true)
    const [Edit, setEdit] = useState(null)
    // const [isEditing, setisEditing] = useState(true)

  

   
    function handleBeginNote() {
        setbeginNote(!beginNote);
    }

    useEffect(() => {
        localStorage.setItem('noteList', JSON.stringify(newNote))
      }, [newNote]);
    
    let place = 'Write Notes Here...'

    function handleNoteInput(event) {
        let noting = event.target.value;
        setnoteInput(noting)
        console.log(noting)
    }
    //  const newNote = {
    //       content: noteInput,
    //       date: currentDate.toLocaleDateString(),
    //         time: currentDate.toLocaleTimeString(),
    //     };
    function addNotes(id) {
        const currentDate = new Date(); // Get the current date and time when a new note is added
        // const newNote = {
        //     title: noteInput,
        //     id: currentDate.toLocaleDateString(),
        //     time: currentDate.toLocaleTimeString()
        // }
        console.log(Edit)
            console.log(newNote)
        if (Edit) {
            setnewNote((prevNotes) =>
    prevNotes.map((item, index) =>
      item === Edit ? noteInput : item
                )
                
            );
            setEdit(null);
            
  setnoteInput('')     
        }
        
        else if(noteInput && noteInput !== ''){
            setnewNote(prev => {
                console.log('not same')
                return [...prev, noteInput]
            })
            setnoteInput('')
        }
        else{alert('Invalid input (make sure the note isnt empty)')}
      
    }

    function handleEdit(id) {
        const newEdit = newNote.find((item,index) => index === id);
        setnoteInput(newEdit)
        console.log(newEdit)
        setEdit(newEdit)       
    }

    function delNote(id) {
        setnewNote(prev => {
            return prev.filter((prevN, index) => {
                return id !== index
            })
        })
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        console.log(year);
    }
  return (
      <div className='note-main-container'>
          <Link to={'/'}>go to todo</Link>
      
          <div>
          <div className='hero-text-con'>
 <h1>Niyi's Notepad</h1>
        <img src='./icon-sun.svg' alt='sun' />
      </div>

          <div onClick={handleBeginNote} className={beginNote ? 'new-task-con' : 'new-task-con_active'}><img src='./icons8-add-50.png' alt='add' /> <p>start writing</p></div>
          <div className={beginNote ? 'input-and-list-con' : 'input-and-list-con_active'}>
         
              <div className='input-and-add-btn-con'>
                      <textarea onChange={handleNoteInput} value={noteInput} name="" id="" cols="40" rows="5" placeholder={place} />
              <img src='./icons8-pen-50.png' alt='pen'  onClick={addNotes} className='add-note-btn'/>
              </div>
          
          <div className='sub-note-main-container'>
                      {newNote.map((note, index) => {
                
                 return   <div><Note
                     note={note}
                     key={index}
                     id={index}
                     delNote={delNote}
                     handleEdit ={handleEdit}
                      />
                      </div>
              })}
             </div>
             </div>
          </div>
    </div>
  )
}
