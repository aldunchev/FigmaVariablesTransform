
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default function MealPage({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return (
    <section className='py-12'>
      <article>
        <header className='container'>
          <Image></Image>
          <h1>{ meal.title }</h1>
          <p>{ typeof summary === 'undefined' ? 'Summary default': summary }</p>
        </header>
        <main>
          <div dangerouslySetInnerHTML={{ __html: '...' }}></div>
        </main>
      </article>
    </section>
  );
}
