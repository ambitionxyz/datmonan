import { useDispatch } from "react-redux";
import { showCartAct } from "../../store/showCart";
import { useSelector } from "react-redux";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const number = useSelector((state) =>
    state.handlerItem.listItem.reduce((total, item) => total + item.quantity, 0)
  );
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(showCartAct.open());
  };
  return (
    <button className={classes.button} onClick={showCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{number !== 0 ? number : 0}</span>
    </button>
  );
};

export default CartButton;
