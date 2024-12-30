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


// *****************************************
// Increment - Increases the count by 1.
// Decrement - Decreases the count by 1 (if greater than 0).
// Reset - Resets the count to 0.
// Custom Input - Allows the user to set a custom count value.
// Count History - Tracks and displays the history of count values.
// Input Validation - Ensures that only valid numeric inputs are allowed.
// Clear History
// Undo Last Action
// 
// 
// *****************************************************************************


import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [customInput, setCustomInput] = useState(0)
  const [history, setHistory] = useState([]);
const [previousCount, setPreviousCount] = useState(null);

  function increaseCount(){
    if (count > 0) {
      setPreviousCount(count)
      setCount(count + 1)
      setHistory([...history, count])
    }

  }
  function decreaseCount() {
    if (count > 0) {
      setPreviousCount(count)
      setCount(count - 1)
      setHistory([...history, count])
    }
  }
  function resetCount() {
    setPreviousCount(count)
    setCount(0);
    setHistory([...history, count])
  }

  function handleChange(e){
    setCustomInput(Number(e.target.value))

  }

  function updateCounter() {
    const customNumber = parseInt(customInput,10)
    if(!isNaN(customNumber)){

    setPreviousCount(count)
      setCount(customNumber)
      setHistory([...history, customNumber])
    }
    
    else
    alert("please enter a valid number")

  }

  function clearHistory(){
    setHistory([])
  }

  function undoLastAction(){
   if(previousCount!=null){
    setCount(previousCount)
    setHistory([...history, previousCount])
   }

  }
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Countdown</h1>
      <h1>{count}</h1>
    
      <div >


<input className= "border-black border-2 " type="number" placeholder = "Type any number" onChange={handleChange}/>
<button className="ml-[5px] bg-green-500  rounded" onClick={updateCounter}>Update Count</button>
</div>
     <div className = "flex gap-5">
        <button onClick={increaseCount}> Increment </button>
        <button onClick={resetCount}>Reset</button>
        
      <button onClick={decreaseCount}> Decrement </button>
      </div>
    <h1>History</h1>
    <button onClick={undoLastAction}>Undo Last Action</button>
    <button onClick={clearHistory}>Clear History</button>
    
        <ul>
          {
                history.map((number) =>{
                  return(
                    <li>{number}</li>
                  )
  })
          }
    
        </ul>
    

    </div>
  )
}

export default Counter