import React, { useState } from 'react'

const ToDo = () => {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])
    const handleChange=(e)=>{
        setTask(e.target.value)

    }
    const addTodo = (e) =>{
      const newTodos = todos.map((todo)=>{
        return {...todo}
      });

      newTodos.push({value:task, isCompleted:false})
      setTodos(newTodos)
    };

    const handleKeyDown =(e) =>{
    if(e.key==="Enter")
      addTodo();
    }

    const handleDelete = (index) =>{
      const filteredTodo = todos.filter((_, todoIndex)=>{
        return todoIndex!=index
      })
      setTodos(filteredTodo);
      console.log("delete");
    }
    
  return (
    <div>
      <div>
        <input className="border-b border-black" type="text" onChange={handleChange} onKeyDown={handleKeyDown}/>
        <button className=" bg-green-500" placeholder="add your task" onClick={addTodo}>Add Task</button>
      </div>
      <div>

        {todos.map((todo, index)=>{
          return(
            <div key={index}>

              <span>{todo.value}</span>
              <span className="m-4"> ✔</span>
              <span onClick={()=>handleDelete(index)}> ❎</span>
            </div>
          )
        })}
        
        </div> 
    </div>
  )
}

export default ToDo
