import Filter from '@/components/Filter.js'
import ProductList from '@/components/ProductList.js'
import Search from '@/components/Search.js'


const Products = () => {
  return (
    <article className=' flex flex-col  '>
      <Search/>
      <section className="flex-1 " >
      <Filter/>
      <ProductList/>

      </section>
      
    </article>
  )
}

export default Products