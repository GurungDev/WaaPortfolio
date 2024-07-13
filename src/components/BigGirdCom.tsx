import React from 'react';
import Image from 'next/image';

interface BigGirdComponentProps {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;

}

const BigGirdComponent: React.FC<BigGirdComponentProps> = ({ imageSrc, imageAlt,heading,description }) => {
  return (
    <div className='flex flex-col space-y-4 p-10 justify-center items-center md:rounded-[40px] h-[450px] w-[400px] bg-white text-black'>
      <div className="text-3xl font-bold text-center">
        {heading}
      </div>
      <div className="text-center text-lg">
        {description}
      </div>
      <div className='size-40'>
        <Image src={imageSrc} alt={imageAlt} height={900} width={900} />
      </div>
    </div>
  );
}

export default BigGirdComponent;
