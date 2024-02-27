import React from 'react'
import { useState } from 'react'
import './todomain.css'
import './lists.css'


export default function TodoList(props) {
  const [Done, setDone] = useState(true)
  function toggleDone() {
    setDone(!Done)
  }
  return (
    <div>
    <div className='list-con' >
      <span onClick={toggleDone} className={Done ? 'list' : 'list_active'}>{props.todoItems} <img src='./icon-cross.svg' alt='del' className='delete-btn' onClick={() => {
        props.delete(props.id)
      }} /></span>
      </div>
      </div>
  )
}
