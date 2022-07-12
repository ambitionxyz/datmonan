import { createSlice } from "@reduxjs/toolkit";

//khoi tao gia tri ban dau
const inital = { isShowCart: false };

const showCartSlice = createSlice({
  name: "showCart",
  initialState: inital,
  reducers: {
    open(state) {
      state.isShowCart = !state.isShowCart;
    },
  },
});

export const showCartAct = showCartSlice.actions;
export default showCartSlice.reducer;
