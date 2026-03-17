import { useState } from "react"

export function CreateTodo()
{
   const [title , setTitle] = useState("");
   const [description , setDescription] = useState("");


     return
        <div>
      <input id="title" style={{
        padding : 10,
        margin : 10
      }}  type="text" placeholder="title"></input> <br></br>


      <input  id="desc" style={{
        padding : 10,
        margin : 10
      }}  type="text" placeholder="description"></input> <br></br>


     <button
  style={{
    padding: 10,
    margin: 10
  }}
  onClick={() => {
    fetch("YOUR_API_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "",
        description: ""
      })
    })
    .then(async function(res) {
      const json = await res.json();
      alert("Todo Added");
    });
  }}
>
  Add Todo
</button>
        </div> 
}

