import { createContext } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const initialState = {
        cartItems:[]
    }
    function cartReducer(state, action){
switch(action.type){

}

    }

    const [cartState, cartDispatch] = useReducer(cartReducer, initialState)
    return <CartContext.Provider>{children}</CartContext.Provider>
}

export function useCart(){
    return useContext(CartContext)
}