import CategoriesList from "@/app/component/CategoriesList";
import { products } from "@/data/ProductItems";


const Womenswear = () => {
  const womensProducts = products.filter(products => products.category === "womenWear" )
    return (
        <CategoriesList categories={womensProducts} title="Women's Wear" />
    )
}

export default Womenswear;