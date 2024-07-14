import Image from 'next/image'
import React from 'react'
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/material';

const Contact_us = () => {
  return (
    <div className='md:h-screen md:w-full bg-white'>
      <div className='md:flex md:flex-row flex flex-col space-y-3 md:h-full md:w-full md:py-9 md:px-20 p-4 py-10'>
        <div className='flex flex-col md:w-1/2 md:p-14 md:space-y-6'>
          <h3>Let’s Start a Conversation</h3>
          <div className='text-black space-y-3'>
            <h4>Ask how we can help you:</h4>
            <div className='flex flex-col '>
                <p className='font-semibold'>See our platform in action</p>
                <p className=''>Request a personalized demo of Waa partner marketing platform.</p>
            </div>
            <div className='flex flex-col '>
                <p className='font-semibold'>Master performance marketing</p>
                <p className=''>From Waa Tech get best of the best services from us.</p>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold'>Get in Touch</p>
                <p>Have any questions or need further information? Contact our support team and we’ll be happy to assist you.</p>
            </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col space-y-3 md:p-20'>
            <div className='md:w-[500px] flex flex-col space-y-4 '>
                <TextField id="outlined-basic" label="First Name" variant="outlined"/>
                <TextField id="outlined-basic" label="Last Name" variant="outlined"/>
                <TextField id="outlined-basic" label="Subject" variant="outlined"/>
                <TextField id="outlined-basic" label="Email" variant="outlined"/>
                <TextField id="outlined-basic" fullWidth label="Comments" multiline minRows={4} />
                <button className='px-4 py-2 text-white bg-neutral-800 hover:bg-black rounded-lg border-2'>Submit</button>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact_us
