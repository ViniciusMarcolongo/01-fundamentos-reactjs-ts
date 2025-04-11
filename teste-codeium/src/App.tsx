import React, { useState } from 'react'
import './App.css'

// this component renders a todo list, with task name, completion state and uses the ID as key

type Todo = {
  id: number,
  name: string,
  completed: boolean
}
function App() {
  const [todoList, setTodoList] = useState([])
  const addTodo = (event:React.FormEvent) => {
    event.preventDefault()
    const target = event.target as HTMLFormElement


  }
  

  return (
    <div className="App">
        <div>
            <h1>Todo List</h1>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Task name" />
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default App
