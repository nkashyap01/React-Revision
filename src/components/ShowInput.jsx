import React, { useState } from 'react'

const ShowInput = () => {
    const [input, setInput] = useState('')

  return (
    <div>
        <input value={input} type="text" onChange={(e)=>setInput(e.target.value)} className="border-2 border-black"/>
        <h1>Typed text:{input}
        </h1>
    </div>
  )
}

export default ShowInput