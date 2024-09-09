 import Image from 'next/image';

interface BigGirdComponentProps {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;

}

const BigGirdComponent: React.FC<BigGirdComponentProps> = ({ imageSrc, imageAlt,heading,description }) => {
  return (
    <div className='flex hover:translate-y-[-10px] duration-300 flex-col space-y-4 p-10 justify-center items-center rounded-[40px] h-[450px]  bg-white text-black'>
      <h4 className=" font-bold text-center">
        {heading}
      </h4>
      <p className="text-center caption">
        {description}
      </p>
      <div className='size-40'>
        <Image src={imageSrc} alt={imageAlt} height={900} width={900} priority />
      </div>
    </div>
  );
}

export default BigGirdComponent;
