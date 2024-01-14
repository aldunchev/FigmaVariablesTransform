import Link from 'next/link';

export default function MealItem({ title, slug }) {
  return (
    <article className='shadow rounded p-8'>
      <header className='py-4'>
        <h2 className='text-2xl'>{ title }</h2>
      </header>
      <Link href={`/meals/${slug}`} className='underline hover:no-underline hover:font-bold transition-all'>View details</Link>
    </article>
  );
}
