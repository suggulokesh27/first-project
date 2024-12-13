"use client"
import { setItem } from "@/store/ProductItemSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface Category {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: number;
    color?: string;  
    category: string;
  }
  
  interface CategoriesListProps {
    categories: Category[];
    title: string;
  }
  
  const CategoriesList = ({ categories, title }: CategoriesListProps) => {
    const dispatch = useDispatch();
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2> {/* Dynamic title */}
    
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {categories.map((product) => (
              <div key={product.id} className="group relative" onClick={() => dispatch(setItem(product))}>
                <Image
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  width={200}
                  height={200}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    {product.color && <p className="mt-1 text-sm text-gray-500">{product.color}</p>}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CategoriesList;
  