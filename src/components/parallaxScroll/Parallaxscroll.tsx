"use client";
import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from "./styles.module.css"
import Image from 'next/image'

export default function TwoColumnParallax() {
  const alignCenter = { display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }
  
  return (
    <div className='w-full h-[100vh] md:my-40' style={{}}>
      <h1 className='text-center w-full text-white'>Our Team members</h1>
      <Parallax className='' style={{scrollbarWidth: "none" }} pages={4}>

        <ParallaxLayer sticky={{ start: 0, end: 1 }} style={alignCenter}  className='overflow-hidden md:flex hidden'>
          <div className={`${styles.card} ${styles.sticky}`}>
            <div className='md:w-44 md:flex md:flex-col hidden'>
              <Image 
                className='w-full h-auto' // Ensure the image takes full width and adjusts height automatically
                src="/assets/img/men.webp" 
                alt="CEO" 
                height={900} 
                width={800} 
              />
              <p>CEO</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 2 }} style={alignCenter} className='md:flex hidden'>
          <div className={`${styles.card} ${styles.sticky}`}>
          <div className='md:w-44 md:flex md:flex-col hidden'>
              <Image 
                src="/assets/img/women.webp" 
                alt="Project Manager" 
                height={1100} 
                width={1000} 
              />
              <p>Project Manager</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3, end: 4 }} style={alignCenter} className='md:flex hidden'>
          <div className={`${styles.card} ${styles.sticky}`}>
          <div className='md:w-full md:h-auto  md:flex md:flex-col hidden'>
              <Image 
                src="/assets/img/men2.png" 
                alt="Marketing Manager" 
                height={1100} 
                width={1000} 
              />
              <p>Marketing Manager</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className='md:p-10 px-5' offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} bg-black bg-opacity-30 flex flex-col px-4 space-y-2`}>
            <h2 className='text-white'>Ram Bahadur</h2>
            <p className='text-center w-full '>
              Ram Bahadur, as the CEO, exemplifies visionary leadership and strategic acumen, steering the company towards sustainable growth and innovation. With a profound commitment to excellence, he ensures the organization&apos;s goals align with its long-term mission and values. Ram Bahadur&apos;s dedication to fostering strong relationships with stakeholders and his ability to inspire and lead his team are key to the company&apos;s continued success.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className='md:p-10  px-5'  offset={2} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} bg-black bg-opacity-30 flex flex-col px-4 space-y-2`}>
            <h2 className='text-white'>Sita Kumari</h2>
            <p className='text-center w-full'>
              Sita Kumari, as a Project Manager, is the cornerstone of efficient project execution, ensuring that all initiatives are delivered on time and within scope. Her meticulous attention to detail and exceptional organizational skills enable her to manage complex projects seamlessly. Sita&apos;s ability to motivate her team and her proactive problem-solving approach are instrumental in driving project success and achieving the company&apos;s strategic objectives.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className='md:p-10 px-5' offset={3} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} bg-black bg-opacity-30 flex flex-col px-4 space-y-2`}>
            <h2 className='text-white'>Hari Bahadur</h2>
            <p className='text-center w-full'>
              Hari Bahadur, the Marketing Manager, excels in creating and implementing innovative marketing strategies that boost brand visibility and drive business growth. With a keen understanding of market trends and consumer behavior, he adeptly tailors campaigns to target diverse audiences effectively. Hari&apos;s leadership and collaborative spirit inspire his team to achieve remarkable results, making him a vital asset to the company&apos;s marketing endeavors.
            </p>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}
