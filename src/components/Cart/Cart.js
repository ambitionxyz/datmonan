import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const listItem = useSelector((state) => state.handlerItem.listItem);

  //console.log(listItem);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {listItem.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
