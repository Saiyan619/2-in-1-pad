import React from 'react'
import { useParams } from 'react-router-dom';
import './note.css'

export default function DisplayFullNote() {
    const params = useParams();
    
  return (
    <div className='display-note'>
      <p>{params.id}</p>
    </div>
  )
}
