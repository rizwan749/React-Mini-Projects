import { useState } from "react";

function ProductTracker({title}){
    const [quantity, setQuantity] = useState(0)

    const removeProduct = () => {
        if(quantity > 0){
            setQuantity(quantity -1)
        }
        else{
            alert("Quantity is already is 0 it cannot be decrease")
        }
    }

    return(
        <div style={{marginTop:"30px",padding:"20px",border:"2px dashed orange",borderRadius:"10px"}}>
            <h2>{title} {quantity} </h2>
            <button onClick={() => setQuantity(quantity + 1)} >Add Item</button>
            <button onClick={removeProduct} >Remove Item</button>
            <button onClick={() => setQuantity(0)} >Reset Quantity</button>
        </div>
    )
}

export default ProductTracker