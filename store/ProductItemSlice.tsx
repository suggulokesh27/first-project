import { createSlice } from "@reduxjs/toolkit";


interface ProductOverview {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: number;
    color: string;
    category: string;
    quantity: number
  }
  
  interface ProductState {
    product: ProductOverview | null; 
  }
  
  const initialState: ProductState = {
    product: null,
  };
  
const ProductItemSlice = createSlice({
    initialState,
    name: 'product',
    reducers:{
        setItem : (state, action) => {
            state.product = action.payload
        }
    }
});     

export const { setItem } = ProductItemSlice.actions;
export default ProductItemSlice.reducer
