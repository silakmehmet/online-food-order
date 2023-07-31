import classes from './MealOptions.module.css';

const MealOptions = (props) => {
  return (
    <div className={classes.options}>
      <button
        className={classes.button}
        value="pasta"
        onClick={props.mealOptionHandler}
      >
        Pasta
      </button>
      <button
        className={classes.button}
        value="pizza"
        onClick={props.mealOptionHandler}
      >
        Pizza
      </button>
      <button
        className={classes.button}
        value="burger"
        onClick={props.mealOptionHandler}
      >
        Burger
      </button>
    </div>
  );
};

export default MealOptions;
