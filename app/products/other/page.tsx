import CategoriesList from "@/app/component/CategoriesList";
import { products } from "@/data/ProductItems";

const OtherProducts = () => {
  const otherProduct = products.filter(products => products.category === "other" )
    return (
        <CategoriesList categories={otherProduct} title="Other Products" />
    )   
}

export default OtherProducts;