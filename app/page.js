import Carts from "@/sections/Carts.js";
import Products from "@/sections/Products.js";

export default function Home({searchParams}) {
  const query=searchParams.query||""
  const filter=searchParams.filter||""
  return (
    <main className="flex-1 h-full grid grid-cols-2 ">
      <Carts/>
      <Products query={query} filter={filter}/>
      
    </main>
  );
}
