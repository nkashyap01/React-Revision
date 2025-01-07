import React, { useState } from 'react'

const Accordian = ({ question, answer }) => {
  const [show, setShow] = useState(false)
  const handleClick = ()=>{
    setShow(prevShow => !prevShow)
  }
  return (
    <div className="border-2 border-black m-4">
   <div className="flex justify-around">
   <h1>{question}</h1>
   <p onClick={handleClick}> {show ? "-":"+"} </p>
   </div>

     {show ?  <p>{answer}</p> : ""}
    </div>
  )
}

export default Accordian