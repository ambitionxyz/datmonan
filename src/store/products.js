import { createSlice } from "@reduxjs/toolkit";
const product = (title, price, description) => ({
  title,
  price,
  description,
});
// title='Test'
// price={6}
// description='This is a first product - amazing!'
const initial = {
  products: [
    product("Com ga", 6, "Thom ngon tung mieng"),
    product("Suon xao chua ngot", 10, "Ngon tuyet"),
    product("Rau muong xao", 5, "Dai ngon tung canh"),
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initial,
  reducers: {},
});

export const productsAct = productsSlice.actions;
export default productsSlice.reducer;
