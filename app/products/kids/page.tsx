import CategoriesList from "@/app/component/CategoriesList";
import { products } from "@/data/ProductItems";

const Kidswear = () => {
  const kidsProduct = products.filter(products => products.category === "kidsWear" )
    return (
       <CategoriesList categories={kidsProduct} title="Kids Wear" /> 
    )
}
export default Kidswear