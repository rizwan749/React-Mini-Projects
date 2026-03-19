import React,{useState} from "react";

const ProductList = () => {

    const products = [
    { id: 1, name: "Premium Dates (Khajoor)", price: "Rs. 800" },
    { id: 2, name: "Iftar Juice Pack", price: "Rs. 350" },
    { id: 3, name: "Prayer Mat", price: "Rs. 1500" },
    { id: 4, name: "Digital Tasbeeh", price: "Rs. 200" },
    { id: 5, name: "Rooh Afzaah", price: "Rs. 450" }
  ];

    const [cartCount, setCartCount] = useState([])

  const handleBuyProduct = (productName) => {
    setCartCount ([...cartCount,productName])
    alert(`You have selected ${productName} . ` )
  }


    return (
        <div>
            <h2>Ramazan Special Products</h2>
            <div style={{backgroundColor:"orange",padding:"15px",color:"white",borderRadius:"9px",marginBottom:"15px"}} >
                <h3 style={{ margin: 0 }}>🛒 Cart: {cartCount.length} Items</h3>
                {
                    cartCount.length > 0 &&(
                        <ul style={{marginTop:"10px",paddingLeft:"20px",fontSize:"16px"}} >
                            {cartCount.map((item,index) => 
                                <li key={index} > {item} </li>
                            )}
                        </ul>
                    )
                }
            </div>
            <ul style={{listStyle:"none",padding:"0"}} >
                {products.map((item) => (
                    <li key={item.id} style={{marginBottom:"15px",fontSize:"18px",display:"flex",gap:"15px",alignItems:"center"}} >
                        <strong> {item.name} </strong> - <span style={{color:"green"}} > {item.price} </span>
                         <button onClick={() => handleBuyProduct(item.name)} 
                        style={{padding:"5px 10px",cursor:"pointer",backgroundColor:"limegreen",border:"none",borderRadius:"4px",color:"white",alignSelf:"flex-end"}}
                        >Add to Cart</button>
                    </li>
                ))}
            </ul>
           

        </div>
    )
}


export default ProductList