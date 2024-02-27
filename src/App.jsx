import TodoMain from './Components/Todolist/TodoMain'
import NotePadMain from './Components/Notepad/NotePadMain'
import DisplayFullNote from './Components/Notepad/DisplayFullNote'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
function App() {
 

  return (
    
         <Router>
     
     
     
     <Routes>
       <Route path="/" element={<TodoMain />} />
        <Route path="/notepadmain" element={<NotePadMain />} />       
        <Route path="/displaynote/:id" element={<DisplayFullNote />} />       
      </Routes>
      
      
    </Router>
  )
}

export default App
