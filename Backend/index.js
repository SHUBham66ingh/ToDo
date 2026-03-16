const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());


app.post("./todo" , async function(req , res)
{
     const createPayLoad = req.body;
     const parsedPayload = createTodo.safeParse(createPayLoad);
     if(!parsedPayload.success)
     {
       res.status(411).json({
        msg : "You Sent the wrong inputs",
       })
       return;
     }


    await todo.create({
        title :  createPayLoad.title,
        decription : createPayLoad.decription,
        completed : false
     })

     res.json(
      {
         msg : "Todo created"
      })
     
})


app.get("./todos" , function(req , res)
{
   const todos = todo.find({});

   res.json(
    {
      todos
    }
   )
})




app.put("./completed" ,  async function(req , res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(parsedPayload.success)
    {
      if(!parsedPayload.success)
      {
        res.status(411).json({
          msg : "You sent the wrong inputs",
        })
        return;
      }

      await todo.update({
         _id : req.body_id
      } , 
    {
       completed : true
    })
     res.json({
        msg : "To do marked as completed"
     })
    }
})

