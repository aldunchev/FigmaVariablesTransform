import MealItem from '../meal-item/meal-item';

export default function MealsGrid({meals}) {
  return (
    <ul>
      { meals.map(meal => (
        <li key={meal.id} className='mb-8'>
          {<MealItem {...meal} />}
        </li>
      )) }
    </ul>
  );
}
