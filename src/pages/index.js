import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { output, setOutput} = useState('')
  const { register, handleSubmit } = useForm()

  function createUser(data) {
    setOutput(JSON.stringify(data, null, 3))
  }

  return (
    <>
    <main className='flex flex-col text-black pt-14 px-24'>
      <h1 className='text-black font-bold text-3xl'>Personal info</h1>
      <p>Please provide your name, email address and phone number.</p>


      <form onSubmit={ handleSubmit(createUser) } className='flex flex-col gap-4 w-full mt-10'>
        <div className='flex flex-col gap-1'>
          <label htmlFor=''>Name</label>
          <input 
          type='name' 
          name='name' 
          className='border border-zinc-300 shadow-sm rounded h-9 px-3'
          {...register('name')}
          />
        </div>    
        <div className='flex flex-col gap-1'>
          <label htmlFor=''>Email Address</label>
          <input 
          type='email' 
          name='email' 
          className='border border-zinc-300 shadow-sm rounded h-9 px-3'
          {...register('email')}
          />
        </div>  
        <div className='flex flex-col gap-1'>
          <label htmlFor=''>Phone Number</label>
          <input 
          type='phone' 
          name='phone'
          className='border border-zinc-300 shadow-sm rounded h-9 px-3'
          {...register('phone')} 
          />
        </div>       
        <button 
          type='submit'
          className='bg-[#02295a] w-fit p-2 px-5 text-white rounded-xl hover:bg-[#144071] duration-300 shadow-sm'
        >
          Next Step
        </button>

      </form>
    </main>
    <pre>{output}</pre>

    
    </>
  )
}
