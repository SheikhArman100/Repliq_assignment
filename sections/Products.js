import Filter from "@/components/Filter.js";
import ProductList from "@/components/ProductList.js";
import Search from "@/components/Search.js";

const Products = ({ query, filter }) => {
  return (
    <article className="h-full w-full flex flex-col items-start border-2 border-l-black ">
      <Search />
      <section className="flex-1 ">
        <Filter query={query} filter={filter} />
        <ProductList query={query} filter={filter} />
      </section>
    </article>
  );
};

export default Products;
