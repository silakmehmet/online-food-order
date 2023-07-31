import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react';
import MealOptions from './MealOptions';
import { useState } from 'react';

const Meals = () => {
  const [mealOption, setMealOption] = useState('pizza');

  const mealOptionHandler = (event) => {
    let value = event.target.value;
    setMealOption(value);
  };
  return (
    <Fragment>
      <MealOptions mealOptionHandler={mealOptionHandler} />
      <AvailableMeals url={mealOption} />
    </Fragment>
  );
};

export default Meals;
