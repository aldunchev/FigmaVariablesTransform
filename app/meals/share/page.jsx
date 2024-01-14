import Button from '@/components/button/button';
import ImagePicker from '@/components/image-picker/image-picker';
import { shareMeal } from '@/lib/actions';

export default function ShareMealsPage() {

  return (
    <section>
      <div className="container">
        <h1 className='text-2xl my-8'>Share meals page</h1>

        <form action={shareMeal}>
          <div className='my-4'>
            <label htmlFor="title" className='block'>Name</label>
            <input type="text" id="title" />
          </div>
          <ImagePicker></ImagePicker>
          <Button type='submit' text='Share your meal' />
        </form>
      </div>
    </section>
  );
}
