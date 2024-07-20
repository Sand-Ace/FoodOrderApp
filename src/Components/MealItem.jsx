const MealItem = ({ meal }) => {
  return (
    <li className="meal-item">
      <article>
        <img src={data[0].image} alt="mac-chees burger" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">$40.40</p>
          <p className=".meal-item-description">{meal.description}</p>
          <p className="meal-item-actions">
            <button>Add to cart</button>
          </p>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
