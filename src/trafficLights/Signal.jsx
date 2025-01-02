import React from 'react'

const Signal = ({color, isActive}) => {
  const style = {
    backgroundColor: isActive ? color : "gray"
  };
  return (
    <div  className="w-16 h-16 border-2 border-black rounded-full"
    style={style}>

    </div>
  )
}

export default Signal