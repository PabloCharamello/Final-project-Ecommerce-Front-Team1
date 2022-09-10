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
      const index = state.productsList.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        state.productsList[index].count++;
      } else {
        state.productsList.push({
          id: action.payload,
          count: 1,
        });
      }
      state.totalCount++;
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
