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
        if (action.payload.stock >= state.productsList[index].quantity + 1) {
          state.productsList[index].quantity++;
          state.totalCount++;
        }
      } else {
        state.productsList.push(action.payload);
        state.totalCount++;
      }
    },
    minusProductFromCart: (state, action) => {
      const index = state.productsList.findIndex((product) => product.id === action.payload);
      if (state.productsList[index].quantity > 1) {
        state.productsList[index].quantity--;
      } else {
        state.productsList.splice(index, 1);
      }
      state.totalCount--;
    },
    removeProductFromCart: (state, action) => {
      const index = state.productsList.findIndex((product) => product.id === action.payload);
      state.totalCount -= state.productsList[index].quantity;
      state.productsList.splice(index, 1);
    },
    clearCart: (state, action) => {
      state.productsList = [];
      state.totalCount = 0;
    },
  },
});

export const { addProductToCart, minusProductFromCart, removeProductFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
