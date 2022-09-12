import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  productsList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const index = state.productsList.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.productsList[index].count++;
      } else {
        state.productsList.push(action.payload);
      }
      state.totalCount++;
    },
    minusProductFromCart: (state, action) => {
      const index = state.productsList.findIndex((product) => product.id === action.payload);
      if (state.productsList[index].count > 1) {
        state.productsList[index].count--;
      } else {
        state.productsList.splice(index, 1);
      }
      state.totalCount--;
    },
    removeProductFromCart: (state, action) => {
      const index = state.productsList.findIndex((product) => product.id === action.payload);
      state.totalCount -= state.productsList[index].count;
      state.productsList.splice(index, 1);
    },
  },
});

export const { addProductToCart, minusProductFromCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
