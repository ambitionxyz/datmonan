import { useDispatch } from "react-redux";
import { handlerItemAct } from "../../store/handlerItem";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const addItem = () => {
    console.log("da click");
    dispatch(handlerItemAct.addItem({ title: title, price: price }));
  };
  const removeItem = () => {
    dispatch(handlerItemAct.removeItem({ title: title, price: price }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
