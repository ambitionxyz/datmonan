//tao store
import { configureStore } from "@reduxjs/toolkit";
//import cac slice lien quan
import showCartReducer from "./showCart";
import handlerItemReducer from "./handlerItem";
import productsReducer from "./products";
const store = configureStore({
  reducer: {
    showCart: showCartReducer,
    handlerItem: handlerItemReducer,
    products: productsReducer,
  },
});

export default store;
