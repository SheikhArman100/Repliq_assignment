"use client"
import { products } from "@/lib/data.js";
import Image from "next/image.js";
import React, { useMemo } from "react";

const ProductList = ({  query,filter }) => {
  const filteredData = useMemo(() => {
    let filteredProducts = products; // Start with all products

    // Apply category filter if available
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
    <div className="py-3 px-6 grid grid-cols-5 gap-3  items-center ">
      {filteredData.length === 0 ? (
        <p className="w-full text-center  col-span-5 ">No products found</p>
      ) : (
        filteredData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col border border-zinc-400  text-zinc-600">
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
    </div>
  );
};
