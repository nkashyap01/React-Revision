import React, { useState } from 'react'

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () =>{
        setIsToggled(!isToggled)
    }
  return (
    <div>

        <label>

            <input checked={isToggled} type="checkbox" onChange={handleToggle}/>

            
        </label>
        <h1>{isToggled?"On":"off"}</h1>
    </div>
  )
}

export default Toggle