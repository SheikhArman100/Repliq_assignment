import Carts from "@/sections/Carts.js";
import Products from "@/sections/Products.js";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 h-full grid grid-cols-2 ">
      <Carts/>
      <Products/>
      
    </main>
  );
}
