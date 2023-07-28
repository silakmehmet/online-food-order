import classes from './MealOptions.module.css';

const MealOptions = (props) => {
  const btnClasses = `${classes.button} ${
    props.btnIsHighlighted ? classes.bump : ''
  }`;

  return (
    <div className={classes.options}>
      <button
        className={btnClasses}
        value="pasta"
        onClick={props.mealOptionHandler}
      >
        Pasta
      </button>
      <button
        className={btnClasses}
        value="pizza"
        onClick={props.mealOptionHandler}
      >
        Pizza
      </button>
      <button
        className={btnClasses}
        value="burger"
        onClick={props.mealOptionHandler}
      >
        Burger
      </button>
    </div>
  );
};

export default MealOptions;
