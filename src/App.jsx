import "./App.css";
import FunctionalComponent from "./components/functional-component";
import ProductList from "./components/products";

function App() {
  return (
    <>
      <div>
        <p className="font-bold bg-zinc-600">Just Testing.........</p>
        <FunctionalComponent />
        <ProductList />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
