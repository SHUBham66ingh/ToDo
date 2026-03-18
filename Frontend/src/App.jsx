import { useState } from 'react'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'
import { use } from 'react';
import { useEffect } from 'react';




function App() {

  const[todos , setTodos] = useState([]);

  useEffect(()=>{

  } , [])

  fetch("")
  .then(async function(res){
    const json = await res.json();
    localStorage.setItem("token" , json.token);
    setTodos(json.todos);
  }) ,
  headers : {
    "Content-type" : "application/json",
    "Authorization" : "Bea"
  }

 
  return (
    <div>
       <CreateTodo></CreateTodo>
       <Todos todos={[
        {
        title : "asd",
        description : "asdasd",
        complete : false
        }
       ]}></Todos>
    </div>
  )
}

export default App
