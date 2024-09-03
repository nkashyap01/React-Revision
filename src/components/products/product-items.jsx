
function ButtonComponent(){

    return <button>click me</button>;
}

function ProductItem(){
    return(
        <div>
            <p> Product 1</p>
            <ButtonComponent/>
        </div>
    )
}

export default ProductItem;
