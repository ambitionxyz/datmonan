import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isShowCart = useSelector((state) => state.showCart.isShowCart);
  return (
    <Layout>
      {isShowCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
