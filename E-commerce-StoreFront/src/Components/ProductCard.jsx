import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {

    const {addToCart,toggleWishlist} = useContext(CartContext)

 
  return (
    <div className="flex flex-col  bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-xl" >
        <img src={product.image} alt="Product Image" className='h-48 w-full object-contain p-4' />
        <div className='p-4' >
            <Link to={`/product/${product.id}`} className="text-lg font-bold line-clamp-2 h-14" > {product.title} </Link>            <p className="text-sm text-gray-500" > {product.category} </p>
            <p className="text-accent font-bold" >${product.price} </p>
                <div className="flex justify-between items-center mt-4" >
                    <button onClick={ () => addToCart(product)}
                    className='bg-primary text-white px-4 py-2 rounded hover:bg-slate-800 cursor-pointer'
                    >Add to cart</button>
                    <button onClick={ () => toggleWishlist(product)} 
                    className='bg-primary text-white px-4 py-2 rounded hover:bg-slate-800 cursor-pointer'
                    >Add to Wishlist</button>
                </div>
        </div>
        
    </div>
  )
}

export default ProductCard