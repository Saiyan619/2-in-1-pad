import React from 'react'
import './note.css'



export default function Note({ note, delNote, id, handleEdit }) {
    // const currentDate = new Date();
    //     const year = currentDate.getFullYear();
    // const day = currentDate.getDate()
    // const month = currentDate.getMonth() + 1
    // const hour = currentDate.getHours() % 12
  // const minutes = currentDate.getMinutes()
    
    return (
      <div>
        <div onClick={()=>{handleEdit(id)}} className='note-container' >
          <span>{note}</span>
            </div>
            {/* <span>{hour}:{minutes} {hour <= 12 ? 'PM' : 'AM'}</span> <span>{day}/{month}/{year} </span>  */}
            <img src='./icons8-delete-24.png' alt='del'
                onClick={() => {
                delNote(id)
            }}/>
        
        </div>
        
  )
}

// onClick={() => {
//   handleEdit(id)
// }
// }