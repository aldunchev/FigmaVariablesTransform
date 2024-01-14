'use server';

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
  };

  console.log(meal);

}
