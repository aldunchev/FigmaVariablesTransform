// import Image from 'next/image'
import Card from '@/components/card/Card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-primary-500'>Home page</h1>
      <div className="container">
        <Card
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93c8db556ebf509da56851f2d062d453768a49bac8d9bde4ed82f06b09d29521?apiKey=6930010e2b8842c4b058a931ee8137c8"
          alt="Descriptive alternate text"
          eyebrow="Eyebrow"
          headline="Catchy headline"
          description="Senectus et netus et malesuada fames ac turpis egestas sed."
          action="Call to Action"
        />
      </div>
    </main>
  )
}
