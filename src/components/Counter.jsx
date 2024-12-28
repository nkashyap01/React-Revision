// import React, { useState } from 'react'

// const Counter = () => {
//     const [count, setCount] = useState(0)
//   return (
//     <div>
//         <button onClick={()=>setCount(count+1)}> +</button>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count-1)}>-</button>
//     </div>
//   )
// }

// export default Counter;


import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <div >
      <h1>Countdown</h1>
      <h1>{count}</h1>
      <div className="flex justify-center">
      <div className = "flex gap-5">

     
        <button onClick={() => setCount(count + 1)}> Increment </button>
        <button onClick={resetCount}>Reset</button>
        
      <button onClick={decreaseCount}> Decrement </button>
      </div>
      </div>

    </div>
  )
}

export default Counter