import { useState } from 'react'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'
import { use } from 'react';
import { useEffect } from 'react';


function App() {
  const[todos , setTodos] = useState([]);

  fetch("https://localhost:3000/todos")
  .then(async function(res)
    {
  const json = await res.json();
  setTodos(json.todos);
    })

  return (
    <div>
       <CreateTodo></CreateTodo>
       <Todos todos={
        [
          {
            title : "acd",
            description : "asdasas",
            completed : false
          }
        ]
       }></Todos>
    </div>
  )
}

export default App
