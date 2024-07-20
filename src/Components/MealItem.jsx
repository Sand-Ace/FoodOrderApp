import { currencyFormatter } from "../utils/formatter";
import Button from "./UI/Button";

import { useContext } from "react";
import CartContext from "../store/CartContext";

const MealItem = ({ meal }) => {
  const { addItem } = useContext(CartContext);

  function handleAddMealToCart() {
    addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${meal.image}`}
          alt="mac-chees burger"
        />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {meal.price && currencyFormatter(meal.price)}
          </p>
          <p className=".meal-item-description">{meal.description}</p>
          <p className="meal-item-actions">
            <Button onClick={handleAddMealToCart}>Add to cart</Button>
          </p>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
