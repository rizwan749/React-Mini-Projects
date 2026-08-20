import {useMemo, useContext} from 'react'
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'
import { toast } from 'react-hot-toast';

const Cart = () => {

    const {cartItems,removeFromCart,wishListItems} = useContext(CartContext)

    const totalBill = useMemo(() => {
       return cartItems.reduce((sum,item) => sum + item.price,0)
    },[cartItems])


    const handleCheckout = (e) => {
        e.preventDefault();
        toast.success("Order placed Successfully")
        
    }

    if (cartItems.length === 0) {
        return (
            <div className='text-center text-2xl text-gray-400 font-bold mt-10'> 
                Your Cart is empty! Go to store page and add some products :) <br/>
                <Link to='/store' className="text-accent underline mt-4 block">Go to Store</Link>
            </div>
        )
    }
    

    

  return (
    <>
    <div className='container mx-auto p-4' >
        <h1 className='text-accent text-2xl font-bold mt-5 mb-5 text-center ' >Your Shopping Cart</h1>
        {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 mb-4 shadow rounded" >
                <div className="flex items-center" >
                    <img src={item.image} className="h-16 w-16 object-contain mr-4" alt="Product Image" />
                    <p className="font-bold" > {item.title} </p>
                </div>
                <div className='flex items-center space-x-6' >
                    <p className='text-accent font-bold' > {item.price} </p>
                    <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition' onClick={() => removeFromCart(item.id)} >Remove</button>
                </div>
            </div>
        ) )}

        <div className='text-right mt-8 border-t pt-4' >
            <h2> ${totalBill.toFixed(2)} </h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-xl h-fit border border-gray-200 mt-6 lg:mt-0">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-800">Checkout</h2>            
            <form onSubmit={handleCheckout} className="flex flex-col gap-4">
                <input type="text" placeholder="Full Name" required className="p-3 border border-gray-300 rounded focus:outline-none focus:border-primary" />
                <input type="email" placeholder="Email Address" required className="p-3 border border-gray-300 rounded focus:outline-none focus:border-primary" />
                <textarea placeholder="Shipping Address" required className="p-3 border border-gray-300 rounded focus:outline-none focus:border-primary resize-none" rows="3"></textarea>
                
                <button type="submit" className="bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition shadow-md mt-2 text-lg cursor-pointer">
                    Place Order
                </button>
            </form>
        </div>
        <hr />
        <h1 className='text-accent text-2xl font-bold mt-5 mb-5 text-center ' >Wishlist Items</h1>
        {wishListItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 mb-4 shadow rounded" >
                <div className="flex items-center" >
                    <img src={item.image} className="h-16 w-16 object-contain mr-4" alt="Product Image" />
                    <p className="font-bold" > {item.title} </p>
                </div>
                <div className='flex items-center space-x-6' >
                    <p className='text-accent font-bold' > {item.price} </p>
                    <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition' onClick={() => removeFromCart(item.id)} >Remove</button>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Cart