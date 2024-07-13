

import Link from 'next/link'
import React from 'react'

import { IoLocationSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className='md:w-full md:h-auto md:flex md:flex-col bg-zinc-200 text-black px-28 py-14  md:space-y-9'>
        <div className='flex space-x-3 justify-between py-5'>
            <div className='flex flex-col space-y-3 md:w-[600px]'>
                <div className='text-4xl font-semibold'>
                    Waa Tech
                </div>
                <div className='text-2xl font-semibold'>
                    Blending your Vision with our Expertise.
                </div>
                <div className='text-lg'>
                We assist businesses from all over the world in creating digital products with no expiration date. We streamline your vision with our expertise to bring life to your fantastic ideas!
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                <div className='font-bold text-xl'>About Company</div>
                <Link className='text-lg'href="">Home</Link>
                <Link className='text-lg'href="">Process</Link>
                <Link className='text-lg'href="">Tools</Link>
                <Link className='text-lg'href="">Support</Link>
            </div>
            <div className='flex flex-col space-y-4'>
            <div className='font-bold text-xl'>Servives</div>
                <Link className='text-lg' href="">Generative AI Web Apps</Link>
                <Link className='text-lg' href="">Custom Software Development</Link>
                <Link className='text-lg' href="">MVP</Link>
                <Link className='text-lg' href="">Blockchain Development</Link>
            </div>
            <div className='flex flex-col space-y-4 w-[200px]'>
            <div className='font-bold text-xl'>Contact</div>
                <div className='flex justify-start items-center space-x-1 text-lg'>
                    <div className='mb-5'><IoLocationSharp /> </div>
                    <div>2023 xyz street, PKR, Nepal</div>
                 </div>
                 <div className='flex justify-start items-center space-x-1 text-lg'>
                     <div className=''><TfiEmail /></div>
                    <div>waatech@gmail.com</div>
              
             </div>

            </div>
        </div>
        <div className='flex w-full justify-center items-center text-lg'>
            <p>© Copyright 2023, All Rights Reserved by Waa Tech.</p>
        </div>


    </div>
  )
}

export default Footer