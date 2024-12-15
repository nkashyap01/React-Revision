// import React, { useReducer, useState } from 'react'

// const Count = () => {

//   const initialState = {count:0}
//   const reducer = (state, action) => {
//    switch(action.type){
//     case 'increase' : {
//        return {count: state.count + 1}
//     }
//     case 'decrease' : {
//      return {count: state.count - 1}}
//      default : {
//       return state
//      }
//     }
//    }
  
// const [state, dispatch] = useReducer(reducer, initialState);
  
//   return (
//     <div>
//         <h1>{state.count}</h1>
//         <button onClick = {() => dispatch({type:'increase'})}> Increase </button>

//         <button onClick = {()=> dispatch({type:'decrease'})}> Decrease </button>
//     </div>
//   )
// }

// export default Count



// *****UseEffect

// import React, { useEffect, useState } from 'react'

// const Count = () => {

// const [count, setCount] = useState(0)

// useEffect(()=>{
//   setTimeout(()=>{
//     setCount(count+1)
//   },1000)
// })
//   return (
//     <div>
    
//     <h1>I have rendered: {count} times </h1>
//     </div>
//   )
// }

// export default Count



/****useRef */

// import React, { useEffect, useRef, useState } from 'react'

// const Count = () => {
// //   const [value, setValue] = useState(0)
  
// //   const count = useRef(0)
// // useEffect(()=>{
// //   count.current=count.current + 1
// // })

// const inputElem = useRef()

// const btnClicked= ()=>{
//   console.log(inputElem.current.value)
//   inputElem.current.style.background="blue";
// }

//   return (


//     <div>
//       {/* <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
//       <h1>{value}</h1>
//       <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
//       <h1>Render times :{count}</h1> */}
       

//       <input type ="text" ref={inputElem}/>
//       <button onClick={btnClicked}> Click Here</button>
//     </div>
//   )
// }

// export default Count
 



///*****useMemo */

import React, { useMemo, useState } from 'react'

const Count = () => {
  const [number, setNumber] = useState(0)
  const [counter, setCounter] = useState(0)
  function cubeNum(num){
    console.log("calculation done")
    return Math.pow(num, 3);

  }

  const result = useMemo(()=>cubeNum(number),[number])
  return (
    <div>
      <input type="number" value={number} onChange={(e)=>{
        setNumber(e.target.value)
      }}/>
      <h1>Cube of the number:{result}</h1>

      <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
      <h1>{counter}</h1>

    </div>
  )
}

export default Count