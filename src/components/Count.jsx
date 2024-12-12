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

import React, { useEffect, useState } from 'react'

const Count = () => {

const [count, setCount] = useState(0)

useEffect(()=>{
  setTimeout(()=>{
    setCount(count+1)
  },1000)
})
  return (
    <div>
    
    <h1>I have rendered: {count} times </h1>
    </div>
  )
}

export default Count



/****useRef */


 