import { useState } from 'react';
import './App.css'
import CreateToDoItem from './components/CreateTo-Do-Item';
import ToDoList from './components/To-Do-List';


function App() {
  const [textInput, setTextInput] = useState('');
  const [todo, settodo] = useState([]);
  return (
    <>
    <h1>Alec's to-do list</h1>
    <CreateToDoItem 
      textInput={textInput}
      setTextInput={setTextInput}
      settodo={settodo}
      todo={todo}
    />
    <ToDoList todo={todo}/>
    </>
  )
}

export default App
