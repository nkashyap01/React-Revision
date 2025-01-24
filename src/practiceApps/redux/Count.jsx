import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state)
  return (
    <div>
      <button onClick = {(e)=>dispatch({type:'increment'})}>Increment</button>
      <h1>{count}</h1>
      <button onClick = {(e)=>dispatch({type:'decrement'})}> Decrement</button>
    </div>
  )
}

export default Count
