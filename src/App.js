import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Todo from './components/Todo'
import { db } from './firebase.js';
import {collection, query, orderBy, onSnapshot, serverTimestamp, addDoc} from 'firebase/firestore'



const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
function App(){
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc=> ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, [input])

  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'todos'),{
      todo: input, 
      timestamp: serverTimestamp()
    })
    console.log('added')
    setInput('')
  }
  return (

    <div className="app">
      <h1 class="form-header">My Todo List</h1>
      <form className="form-ctrl">
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>
        <Button type="submit" onClick={addTodo} variant="contained" color="primary"
        disabled={!input}>Add Todo</Button>
      </form>
      <ul>
        {todos.map(item => <Todo key={item.id} arr={item} />)}
      </ul>

    </div>

  )

  
}

export default App;
