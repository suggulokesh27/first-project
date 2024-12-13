import ProductOverview from "@/app/component/ProductOverview";
import { products } from "@/data/ProductItems";

// Generate static parameters for all products
export async function generateStaticParams() {
  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
  ];

  return products.map((product) => ({
    productId: product.id.toString(),
  }));
}

// Define the page component
const Page1 = async({ params }: { params: Promise<{ productId: string }>  }) => {
  // // Use static data to find the product
  // const product = products.find((p) => p.id.toString() === params.productId);

  // if (!product) {
  //   return <p>Product not found</p>;
  // }

  return (
    <div>
      <ProductOverview />
    </div>
  );
};

export default Page1;
