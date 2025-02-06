import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/cartSlice'
const Product = (props) => {
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <img src={props.image}/>
      </div>
      <div>
        <h5>{props.name}</h5>
        <p>{props.price}</p>
        <button className="bg-orange-500 rounded m-6 p-2 text-white" onClick = {(e)=>{
          console.log('Button clicked');
          dispatch(addItem({ name: props.name, price: props.price }));
        }}> Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
