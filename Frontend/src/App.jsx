import { useState } from 'react'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'




function App() {

  const[todos , setTodos] = useState([]);

  fetch("")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })

 
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
