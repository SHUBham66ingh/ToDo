const zod = require("zod");

const ceateTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})


const updateTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

module.exports = {
    createTodo : this.createTodo,
    updateTodo : updateTodo
}





