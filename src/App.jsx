import products from "./products.json"
import "./App.css";
import Cart from "./practiceApps/cartComponent/Cart";
import Product from "./practiceApps/cartComponent/Product";




function App() {
 

  return (
    <>
      <div>
        <p className="font-bold bg-zinc-600">Just Testing.........</p>
    <Cart/>
    <div className="flex flex-wrap">
     {products.map((product)=>(
      <Product {...product}/>
     ))}
    </div>
  
      </div>
     
    </>
  );
}

export default App;



