import React, { useEffect, useState } from 'react'
import Signal from './Signal'

const Traffic = ({lights=["green", "yellow", "red"]}) => {
  const [active, setActive] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setActive((prevActive)=>{
        return (prevActive+1)%lights.length;
      })

    }, 1000)
  }, [])
  return (
    <div className = "flex flex-column mt-10 gap-5 justify-center">
        {
            lights.map((color, index)=>{
                return(
                  <Signal isActive={active===index}  color={color}  key={index} />
                )
            })
        }

    </div>
  )
}

export default Traffic