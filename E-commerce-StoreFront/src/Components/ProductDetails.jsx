import {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import {CartContext} from '../context/CartContext'

const ProductDetails = () => {

    const { id } = useParams()
    const [loading,setLoading] = useState(true)
    const [product,setProduct] = useState(null)

    const {addToCart, toggleWishlist} = useContext(CartContext)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            const formattedProduct = {
                id: data.id,
                title: data.title,
                price: data.price,
                category: data.category,
                description: data.description,
                image: data.thumbnail 
            };
            setProduct(formattedProduct);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div className="text-3xl text-gray-400 text-center mt-7 mb-7 " > Loading product details... </div>
    if (!product) return <div className="text-3xl text-gray-400 text-center mt-7 mb-7 " > Product not found! </div>


  return (
    
    <div 
        className="relative min-h-screen py-16 bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        
        <div className='relative z-10 container mx-auto p-8 lg:p-12 bg-white rounded-2xl shadow-2xl max-w-6xl mt-10'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                
                
                <div className="flex justify-center bg-gray-50 rounded-xl p-8 border border-gray-100">
                    <img 
                        className='w-full h-[400px] object-contain transition-transform duration-500 hover:scale-110' 
                        src={product.image} 
                        alt={product.title} 
                    />
                </div>
                
               
                <div className='flex flex-col justify-center'>
                    <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">{product.category}</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">{product.title}</h1>
                    
                    <div className="w-20 h-1 bg-accent mb-6"></div> 

                    <h2 className="text-3xl text-gray-900 font-bold mb-6">${product.price}</h2> 
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">{product.description}</p>
                    
                    
                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                        <button 
                            onClick={() => addToCart(product)} 
                            className='flex-1 bg-primary text-white font-bold px-6 py-4 rounded-lg hover:bg-slate-800 transition shadow-md'
                        >
                            Add to Cart
                        </button>
                        <button 
                            onClick={() => toggleWishlist(product)} 
                            className='flex-1 bg-orange-500 text-white font-bold px-6 py-4 rounded-lg hover:bg-orange-600 transition shadow-md'
                        >
                            Add to Wishlist
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductDetails