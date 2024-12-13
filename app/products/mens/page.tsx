import CategoriesList from "@/app/component/CategoriesList";
import { products } from "@/data/ProductItems";


const Menswear = () => {

  const mensProduct = products.filter(products => products.category === "mensWear" )

    return (
        <CategoriesList categories={mensProduct} title="Men's Wear" />
    )
}

export default Menswear;