import ProductItem from "./product-items";

const productDummyData = ["product1","product2","product3"];
function ProductList() {
  return (
    <div>
      <h1>Ecommerce Project</h1>

      <ul>
        {
          productDummyData.map((items, index)=>(
            <li key={index}>{items}</li>
            
          ))
        }
      </ul>
      <ProductItem />
    </div>
  );
}

export default ProductList;
