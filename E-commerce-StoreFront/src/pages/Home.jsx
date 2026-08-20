import ProductCard from '../components/ProductCard'
import {useState,useEffect} from 'react'

import {Link} from 'react-router-dom'

const Home = () => {

  const [featured,setFeatured] = useState([])

   useEffect(() => {
        
        fetch("https://dummyjson.com/products?limit=4")
        .then(res => res.json())
        .then(data => {
            const formattedProducts = data.products.map(p => ({
                id: p.id,
                title: p.title,
                price: p.price,
                category: p.category,
                image: p.thumbnail 
            }));
            setFeatured(formattedProducts);
        });
    }, []);


  return (
    <>
    <div 
        className="relative min-h-screen pb-12 bg-fixed" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        
        <div className="absolute inset-0 bg-black opacity-70"></div>
        
        <div className="relative z-10 flex flex-col items-center">
            
            
            <div className="text-center p-6 mt-20 mb-12" >
                <h1 className="text-5xl font-bold text-white mb-4" >Discover Your Style</h1>
                <p className="text-lg text-gray-200 mb-8" >The best place to find high-quality products at unbeatable prices.</p>
                <Link to='/store' className="bg-orange-600 text-white px-8 py-3 rounded-full text-xl font-bold hover:bg-orange-700 transition shadow-lg" >Shop Now</Link>
            </div>

            
            <div className="container mx-auto p-8 mt-10">
               
                <h2 className="text-3xl text-center font-bold text-white mb-8" >Trending Now</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >
                    {featured.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Home