


import Image from 'next/image'
import React from 'react'
import BigGirdComponent from './BigGirdCom'

const BigGrid = () => {
  return (
    <div className='md:flex md:flex-col md:space-y-5 md:px-9 md:py-12 md:h-full md:w-full'>
        <div className='md:text-6xl md:w-full md:flex md:justify-center md:items-center font-black'>How can we help you?</div>
        <div className='md:text-2xl md:text-center md:w-full md:flex md:justify-center md:items-center md:px-48'>From product vision discussion to software development, our seasoned team assists businesses worldwide on their way to digital transformation and helps companies take full advantage of IT advancements.</div>
        <div className='flex flex-col space-y-6'>
          <div className='flex space-x-6 justify-center items-center'>
              <BigGirdComponent
                imageSrc='/assets/img/ai.png'
                imageAlt='ai'
                heading='Generative AI Integrations'
                description='Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences.'/>
              <BigGirdComponent
                 imageSrc='/assets/img/ai.png'
                imageAlt='ai'
                heading='Generative AI Integrations'
                description='Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences.'/>
               <BigGirdComponent
                 imageSrc='/assets/img/ai.png'
                imageAlt='ai'
                heading='Generative AI Integrations'
                description='Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences.'/>
          </div>
          <div className='flex space-x-6 justify-center items-center'>
              <BigGirdComponent
                imageSrc='/assets/img/ai.png'
                imageAlt='ai'
                heading='Generative AI Integrations'
                description='Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences.'/>
              <BigGirdComponent
            imageSrc='/assets/img/ai.png'
                imageAlt='ai'
                heading='Generative AI Integrations'
                description='Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences.'/>
               <BigGirdComponent
                imageSrc='/assets/img/ai.png'
                imageAlt='ai'
                heading='Generative AI Integrations'
                description='Integrate the power of artificial intelligence into your existing web apps or create brand new AI-driven web experiences.'/>
          </div>
        </div>
    </div>
  )
}

export default BigGrid