import "./App.css";
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
import ShowInput from "./components/ShowInput";
import Timer from "./components/Timer";
import ToDo from "./components/ToDo";
import Toggle from "./components/Toggle";

function App() {
  const items = ["item1", "item2", "item3", "item4", "item4"]
  return (
    <>
      <div>
        <p className="font-bold bg-zinc-600">Just Testing.........</p>
        {/* <FunctionalComponent /> */}
        {/* <ProductList /> */}
        <Filter items={items}/>
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
