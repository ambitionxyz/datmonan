import { createSlice } from "@reduxjs/toolkit";
//tao item
const item = (title, price, quantity = 1, total = quantity * price) => ({
  title,
  quantity,
  price,
  total,
});
//khoi tao gia tri ban dau
const initial = {
  listItem: [],
};

const handlerItemSlice = createSlice({
  name: "handlerItem",
  initialState: initial,
  reducers: {
    addItem(state, actions) {
      const { title, price } = actions.payload;
      const indexTitleExist = state.listItem.findIndex(
        (item) => item.title === title
      );

      if (state.listItem.length === 0 || indexTitleExist === -1) {
        state.listItem.push(item(title, price));
      } else {
        state.listItem[indexTitleExist].quantity += 1;
        state.listItem[indexTitleExist].total += price;
      }
    },
    removeItem(state, actions) {
      const { title, price } = actions.payload;
      const indexTitle = state.listItem.findIndex(
        (item) => item.title === title
      );
      if (indexTitle !== -1) {
        if (state.listItem[indexTitle].quantity === 1) {
          state.listItem = state.listItem.filter(
            (item) => item.title !== title
          );
        } else {
          state.listItem[indexTitle].quantity -= 1;
          state.listItem[indexTitle].total -= price;
        }
      }
    },
  },
});

export const handlerItemAct = handlerItemSlice.actions;
export default handlerItemSlice.reducer;
