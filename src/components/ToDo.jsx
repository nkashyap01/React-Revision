import React, { useState } from 'react'

const ToDo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos]= useState([]);

    const addTodo = () => {
        if(input.trim()!==''){
            setTodos([...todos, input]);
            setInput('');
        }
    }

  return (
    <div>
        <input type="text" onChange = {(e)=>setInput(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
        <ul>
            {
                todos.map((todo,index)=>(
                    <li key={index}>{todo} <button>Remove</button>
                    </li>
                ))
            }
        </ul>

    </div>
  )
}

export default ToDo