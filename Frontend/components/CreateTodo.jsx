import { useState } from "react";


export function CreateTodo(props) {
  const[title , setTitle] = useState("");
  const[description , setDescription] = useState("");

  return (
    <div>
       <input
  id="title"
  style={{ padding: 10, margin: 10 }}
  type="text"
  placeholder="title"
  onChange={(e) => setTitle(e.target.value)}
      /> <br />


     <input
  id="description"
  style={{ padding: 10, margin: 10 }}
  type="text"
  placeholder="description"
  onChange={(e) => setDescription(e.target.value)}
/>
<br />




      <button style={{
        padding : 10,
        margin : 10
      }} onClick={()=>{
        fetch("http://localshost:3000/todos",{
          method : "POST",
          body:{
            title: title,
            description : description
          },
          headers:{
            "contentType":"application/json"
          }

        })
        .then(async function(res){
          const json = await res.json();
          alert("Todo Added");
        })
      }}>Add a Todo</button>
    </div>
  );
}
