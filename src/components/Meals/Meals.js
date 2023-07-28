import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react';
import MealOptions from './MealOptions';
import { useState } from 'react';

const Meals = () => {
  const [mealOption, setMealOption] = useState('pizza');
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const mealOptionHandler = (event) => {
    let value = event.target.value;
    setMealOption(value);
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  };
  return (
    <Fragment>
      <MealOptions
        mealOptionHandler={mealOptionHandler}
        btnIsHighlighted={btnIsHighlighted}
      />
      <AvailableMeals url={mealOption} />
    </Fragment>
  );
};

export default Meals;
