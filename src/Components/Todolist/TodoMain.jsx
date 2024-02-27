import { useState, useEffect } from 'react'
import TodoList from './TodoList'
import { Link } from 'react-router-dom'
import './todomain.css'

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")))
  } else {
    return [];
  }
}

export default function TodoMain() {

 const [input, setinput] = useState('')
  const [item, setitem] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(item))
  }, [item]);

  function handleInput(event) {
    let inputted = event.target.value;
    setinput(inputted);
  }

  function addItem(event) {
    if (input !== '') {
      setitem(prev => {
        return [...prev, input]
      })
      setinput('')
    } else {
      alert('Wrong input, please type in a correct input')
    }
    
     ;
    console.log(input)
  }
  function deleteList(id) {
    setitem(prev => {
      return prev.filter((prevItems, index) => {
        return id !== index
      })
    })
  }

  function clearList() {
    setitem([])
  }


  

  
  return (
    <div className='todomain-container'>
      <p>Need a Notepad click the link below </p><Link to={'/notepadmain'}>go to notepad</Link> 

      <div className='hero-text-con'>
 <h1>Niyi's To-dos</h1>
        <img src='./icon-sun.svg' alt='sun' />
      </div>

      <div className='sub-todo-con'>
        <div className='todo-input-con'>
          <input type="text" className='todo-input' onChange={handleInput} value={input} placeholder='enter todo' />
          <button className='enter-btn' onClick={addItem}>enter</button>
          </div>
        <div className='main-list-con'>
      {item.map((todoItems, index) => {
         return<TodoList
          todoItems={todoItems}
          id={index}
          key={index}
          delete={deleteList}
        />
      })}
      </div>
        <div className='btn-container'>
          <button className='clear-btn' onClick={clearList}>clear</button>
          </div>
        </div>
    </div>)
    }