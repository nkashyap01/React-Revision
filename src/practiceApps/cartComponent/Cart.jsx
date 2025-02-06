import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const items = useSelector((state)=>state);
  const total = items.cart.reduce((a,b)=>a + b.price, 0 )
  console.log("items", items)
  return (
    <div>
      <h1>Cart Items:{items.cart.length}(Total Price, {total})</h1>
    </div>
  )
}

export default Cart
