'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Button from '../button/button';

export default function ImagePicker() {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState(null);

  function handlePickImage() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(false);
      return false;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return(
    <div className="flex gap-4 items-start my-4">
      <div className="w-40 h-40 relative rounded overflow-hidden">
        {pickedImage ? <Image src={pickedImage} fill alt="Image selected by the user." /> : <p>No image picked yet.</p> }
      </div>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png image/jpeg"
        className='hidden'
        ref={ imageInput }
        onChange={handleImageChange}
        required
      />
      <Button type='button' text='pick an image' clickHandler={handlePickImage} />
    </div>
  );
}
