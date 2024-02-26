import Carts from "@/sections/Carts.js";
import Products from "@/sections/Products.js";

export default function Home({ searchParams }) {
  const query = searchParams.query || "";
  const filter = searchParams.filter || "";
  return (
    <main className="flex-1  grid grid-cols-1 xl:grid-cols-2  overflow-hidden ">
      <div className=" order-1 xl:order-2">
        <Products query={query} filter={filter} />
      </div>

      <div className=" order-2 xl:order-1">
        <Carts />
      </div>

     
    </main>
  );
}
