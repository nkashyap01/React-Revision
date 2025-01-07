// import { createContext, useState } from "react";
import "./App.css";

import Faq from "./practiceApps/accordian/Faq";

// import { CartProvider } from "./components/CartContext";
// import ChangeBg from "./components/ChangeBg";
// import Fetch from "./components/Fetch";
// import Filter from "./components/Filter";
// import FunctionalComponent from "./components/functional-component";
// import ItemList from "./components/ItemList";
// import Login from "./components/Login";
// import ProductList from "./components/products";
// import RandomQuote from "./components/RandomQuote";
// import Routing from "./components/Routing";
// import SearchFilter from "./components/SearchFilter";
// import ShoppingCart from "./components/ShoppingCart";
// import ShowInput from "./components/ShowInput";
// import Timer from "./components/Timer";
// import ToDo from "./components/ToDo";
// import Toggle from "./components/Toggle";
// import ChildA from "./hooks/ChildA";


// const ThemeContext = createContext();
function App() {
  // const items = ["item1", "item2", "item3", "item4", "item4"]
  // const [theme, setTheme] = useState('light');

  return (
    <>
      <div>
        <p className="font-bold bg-zinc-600">Just Testing.........</p>
        {/* <FunctionalComponent /> */}
        {/* <ProductList /> */}
        {/* <Filter items={items}/> */}
        {/* <CartProvider> <ShoppingCart/></CartProvider> */}

{/* <ThemeContext.Provider value={{theme, setTheme}}>
 <div className={`border-b-2 ${theme=='light'?'bg-gray-600':'bg-black'} h-[200px] w-[500px] flex items-center justify-center`}>
 <ChildA/>
 </div>
</ThemeContext.Provider> */}
      {/* <Accordian/> */}
      {/* <StarRating noOfStars={5}/> */}
  <Faq/>
      </div>
     
    </>
  );
}

export default App;
// export {ThemeContext};

