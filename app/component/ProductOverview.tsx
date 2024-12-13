'use client';

import { addCart } from '@/store/CartSlice';
import { RootState } from '@/store/store';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import CartItems from './Cart';
import { useState } from 'react';
import CategoriesList from './CategoriesList';
import { products } from '../../data/ProductItems';

export default function ProductOverview() {
  const productItem = useSelector((state: RootState) => state.productItem.product);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cartQuantity = useSelector((state: RootState) => state.cart.items);

  const isGotCart = cartQuantity?.some((item) => item.id === productItem?.id);

  const newArrivals = products.filter((product) => product.id >= Math.random() * 100).slice(0, 5)

  const handlerCart = () => {
    if (productItem) {
      dispatch(addCart(productItem));
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around flex-col lg:flex-row">
          <Image
            src={productItem?.imageSrc || '/fallback-image.jpg'} 
            alt={productItem?.imageAlt || 'Default alt text'} 
            className="w-full max-w-sm rounded-lg shadow-md object-cover"
            width={200}
            height={200}
          />
          <div className='flex flex-col items-center'>
            <h1 className="mt-4 text-xl font-bold text-gray-900">{productItem?.name || 'Product Name'}</h1>
            <p className="text-gray-700">{productItem?.color || 'Color'}</p>
            <p className="mt-2 text-lg font-semibold text-gray-900">{productItem?.price || 'Price'}</p>
            <div>
              <button
                className="mt-4 w-full max-w-xs bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={handlerCart}
              >
                Add to Cart
              </button>
              {isGotCart && (
                <button
                  className="mt-4 w-full max-w-xs bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => setOpen(true)}
                >
                  <CartItems open={open} setOpen={setOpen} />
                  Go to Cart
                </button>
              )}
            </div>
          </div>
        </div>

        {
          isGotCart &&
          <CategoriesList categories={newArrivals} title="Recommended" />
        }
      </div>
    </div>
  );
}
