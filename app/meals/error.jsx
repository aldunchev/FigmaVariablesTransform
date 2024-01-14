'use client';

export default function Error() {
  return (
    <section className='container py-8'>
      <h1 className='text-red-600 text-2xl'>An error occurred!</h1>
      <p className='font-medium text-xl'>Failed to fetch data!</p>
    </section>
  );
}
