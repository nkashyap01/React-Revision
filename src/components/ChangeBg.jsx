import React, { useState } from 'react'

const ChangeBg = () => {
    const [backgroundColor, setBackgroundColor] = useState('blue')
    const handleClick = () =>{
        const newColor=backgroundColor==='blue'?'red':'blue';
        setBackgroundColor(newColor);
    }
  return (
    <div onClick={handleClick} style={{
        backgroundColor,
        width:'200px',
        height:'200px',
        cursor:'pointer'
    }}>click me to change background color </div>
  )
}

export default ChangeBg