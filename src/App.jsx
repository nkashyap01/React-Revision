import "./App.css";
import Counter from "./components/Counter";
import FunctionalComponent from "./components/functional-component";
import ItemList from "./components/ItemList";
import ProductList from "./components/products";
import ShowInput from "./components/ShowInput";
import Toggle from "./components/Toggle";

function App() {
  return (
    <>
      <div>
        <p className="font-bold bg-zinc-600">Just Testing.........</p>
        {/* <FunctionalComponent /> */}
        {/* <ProductList /> */}
       <Toggle/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
