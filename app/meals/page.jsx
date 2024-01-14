import { getMeals } from '@/lib/meals';
import MealsGrid from '@/components/meals-grid/meals-grid';
import { Suspense } from 'react';

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}

export default function MealsPage() {

  return (
    <>
      <h1>This is the meals page</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Meals/>
      </Suspense>
    </>
  )
}
