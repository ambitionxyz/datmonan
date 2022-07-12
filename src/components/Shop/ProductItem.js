import { useDispatch } from "react-redux";
import { handlerItemAct } from "../../store/handlerItem";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  const addItem = () => {
    console.log("da them");
    dispatch(handlerItemAct.addItem({ title, price }));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
