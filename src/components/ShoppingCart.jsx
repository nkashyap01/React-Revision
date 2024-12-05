 import React from 'react'
import { useCart } from './CartContext';
 
 const ShoppingCart = () => {
    const {cartState, cartDispatch} = useCart();

    const addToCart = (item)=>{

    }
    const products = [
        {
            id:1, name:'Product1'
        },
        {
            id:2, name:'Product2'
        },
        {
            id:3, name:'Product3'
        }
    ]
   return (
     <div>
<h2>Shopping Cart</h2>
<h2>Product List</h2>
<ul>
    {
        products.map((product)=>(
            <li >{product.name}
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </li>
        ))
    }
</ul>

     </div>
   )
 }
 
 export default ShoppingCart

