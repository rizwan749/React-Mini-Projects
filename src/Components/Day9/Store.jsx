import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Store = () => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Watch", price: 2000 },
  ];

  const { addToCart, confirm } = useContext(CartContext);

  return (
    <div>
      <h2 className="  text-3xl font-bold m-6">Our Products</h2>
      {confirm && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-2xl transition-all duration-300">
          {confirm}
        </div>
      )}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-xl mb-2 font-bold"> {product.name} </h3>
            <p className="text-gray-600 mb-6"> Price : RS {product.price} </p>

            <button
              onClick={() => addToCart(product.name)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition "
            >
              Add To Cart 🛒
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
