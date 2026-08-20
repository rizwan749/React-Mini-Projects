import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
      <nav className="bg-primary text-white shadow-md sticky top-0 z-50 p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-accent text-3xl font-bold tracking-wide "
          >
            StoreFront
          </Link>

          <div className="flex space-x-6 font-medium text-xl">
            <Link
              to="/"
              className="hover:text-orange-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/store"
              className="hover:text-orange-400 transition duration-300"
            >
              Store
            </Link>
            <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative flex items-center hover:text-orange-400 transition duration-300"
            >
              <span className="mr-1">Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-3 -right-4 bg-orange-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
          </div>
          
        </div>
      </nav>

  );
};

export default Navbar;
