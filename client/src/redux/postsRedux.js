import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  // if you are using normal redux, you cant do mutations like this on states
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; // this is cart quantity
      // we fill in the array with Product object
      state.products.push(action.payload); 
      // quantity below refers to product quantity
      state.total += action.payload.price * action.payload.quantity; 
    },
    removeAllProduct: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total= 0;
      // state.cart.products = [];
      // state.cart.quantity = 0;
      // state.cart.total = 0;
    },
  },
});

export const { addProduct, removeAllProduct } = cartSlice.actions;
export default cartSlice.reducer;