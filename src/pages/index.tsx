import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const inter = Inter({ subsets: ['latin'] })


const createUserFormSchema = z.object({
  name: z.string()
    .nonempty('name is obrigatory'),
  
  email: z.string()
    .nonempty('email is obrigatory')
    .email('invalid email format'),
  phone: z.string()
    .regex(/^[0-9]+$/, 'must only contain numbers')
    .min(6, 'invalid phone number')
    .max(10, 'invalid phone number'),

})

type CreateUserFormData = z.infer<typeof createUserFormSchema>


export default function Home() {
  const [output, setOutput] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

  const { register, 
    handleSubmit, 
    formState: { errors, isValid }
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })


  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 3)) 
  }

  function onSubmit(data: CreateUserFormData) {
    setIsFormValid(isValid);
    createUser(data);
  }

  const [selectedButton, setSelectedButton] = useState('button1');

  return (
    <>
    <main className='flex flex-col text-black pt-14 px-24'>
      <h1 className='mb-2 text-black font-bold text-3xl'>Personal info</h1>
      <p className='text-gray-400'>Please provide your name, email address and phone number.</p>


      <form id='user-form' onSubmit={ handleSubmit(onSubmit) } className='flex flex-col gap-5 w-full mt-10'>
        <div className='flex flex-col gap-1'>
          <label className='font-medium text-sm' htmlFor=''>Name {errors.name && <span className='ml-72 text-red-500 text-sm font-medium'>{errors.name.message}</span>} </label>
          <input 
          type='name' 
          name='name' 
          className='border border-zinc-300 shadow-sm rounded h-10 px-3'
          {...register('name', { required: true })}
          onChange={() => {
            const form = document.getElementById('user-form') as HTMLFormElement
            if (form) {
              setIsFormValid(form.checkValidity())
            }
          }}
          />

        </div>    
        <div className='flex flex-col gap-1'>
          <label className='font-medium text-sm' htmlFor=''>Email Address {errors.email && <span className='mr-0 ml-60 text-red-500 text-sm font-medium'>{errors.email.message}</span>}</label>
          <input 
          type='email' 
          name='email' 
          className='border border-zinc-300 shadow-sm rounded h-10 px-3'
          {...register('email', { required: true })}
          onChange={() => {
            const form = document.getElementById('user-form') as HTMLFormElement
            if (form) {
              setIsFormValid(form.checkValidity())
            }
          }}
          />
        </div>  
        <div className='flex flex-col gap-1'>
          <label className='font-medium text-sm' htmlFor=''>Phone Number {errors.phone && <span className='ml-44 text-red-500 text-sm font-medium'>{errors.phone.message}</span>}</label>
          <input
          type='phone' 
          name='phone'
          className='border border-zinc-300 shadow-sm rounded h-10 px-3'
          {...register('phone', { required: true })}
          onChange={() => {
            const form = document.getElementById('user-form') as HTMLFormElement
            if (form) {
              setIsFormValid(form.checkValidity())
            }
          }}
          />
        </div>
    
        <div className='relative'> 
        <Link href="/selectplan">    
        <button
          onClick={() => setSelectedButton('button2')}
          disabled={!isFormValid}
          id='enviar-btn'
          type='submit'
          className={`absolute margin top-12 right-0 bg-[#02295a] w-fit p-2 px-5 text-white rounded-xl hover:bg-[#144071] duration-300 shadow-sm`}
        >
          Next Step
        </button>
        </Link>
        </div>
        

      </form>
    </main>

    
    </>
  )
}
