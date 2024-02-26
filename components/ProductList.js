"use client"
import { products } from "@/lib/data.js";
import { addToCart, useCart } from "@/lib/store/cartStore.js";
import { Check, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image.js";
import { useMemo } from "react";

const ProductList = ({  query,filter }) => {
  const cart =useCart()
  const filteredData = useMemo(() => {
    let filteredProducts = products; 

    
    if (filter) {
      filteredProducts = filteredProducts.filter(
        (product) =>product.category.toLowerCase()===filter.toLowerCase()
      );
    }

    // Apply title filter based on query
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return filteredProducts;
  }, [ filter, query]);
  return (
    <div className="py-3 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 2xl:grid-cols-5 gap-3  items-center last:col-span-2 mx-auto ">
      {filteredData.length === 0 ? (
        <p className="w-full text-center  col-span-5 ">No products found</p>
      ) : (
        filteredData.map((product, index) => (
          <ProductCard key={index} product={product}  carts={cart}/>
        ))
      )}
    </div>
  );
};

export default ProductList;

const ProductCard = ({ product,carts }) => {
  const isInCarts=carts?.some((cart)=>cart.title===product.title)
  
  return (
    <div className="relative flex flex-col border border-zinc-400  text-zinc-600">
      <div className="relative w-full aspect-[1/1.2] bg-gray-500">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-center text-lg font-bold p-1">${product.price}</p>
      <h4 className="text-center text-base font-semibold p-1  border-t border-t-zinc-400">
        {product.title}
      </h4>
      <button className="absolute right-2 top-1 p-2 bg-indigo-400 rounded-full">
        {isInCarts?<Check className="size-5 stroke-white"/>:<Plus className="size-5 stroke-white"  onClick={()=>addToCart(product)}/>}
      
      </button>
    </div>
  );
};
