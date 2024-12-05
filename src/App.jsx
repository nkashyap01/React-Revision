import { createContext, useState } from "react";
import "./App.css";
// import { CartProvider } from "./components/CartContext";
import ChangeBg from "./components/ChangeBg";
import Counter from "./components/Counter";
import Fetch from "./components/Fetch";
import Filter from "./components/Filter";
import FunctionalComponent from "./components/functional-component";
import ItemList from "./components/ItemList";
import Login from "./components/Login";
import ProductList from "./components/products";
import RandomQuote from "./components/RandomQuote";
import Routing from "./components/Routing";
import SearchFilter from "./components/SearchFilter";
// import ShoppingCart from "./components/ShoppingCart";
import ShowInput from "./components/ShowInput";
import Timer from "./components/Timer";
import ToDo from "./components/ToDo";
import Toggle from "./components/Toggle";
import ChildA from "./hooks/ChildA";


const UserContext = createContext();
function App() {
  // const items = ["item1", "item2", "item3", "item4", "item4"]
 const [user, setUser] = useState({name:"neha"})
  return (
    <>
      <div>
        <p className="font-bold bg-zinc-600">Just Testing.........</p>
        {/* <FunctionalComponent /> */}
        {/* <ProductList /> */}
        {/* <Filter items={items}/> */}
        {/* <CartProvider> <ShoppingCart/></CartProvider> */}


       <UserContext.Provider value={user}> 
        <ChildA />
       </UserContext.Provider>
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
export {UserContext};
