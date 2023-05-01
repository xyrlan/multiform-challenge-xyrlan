import { Inter } from 'next/font/google'

import Button from './Button'



import { set, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { effect, object, string, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'



const inter = Inter({ subsets: ['latin'] })

export function Yourinfo({ goForwards, data, updateFieldHandler }) {

  const createUserFormSchema = z.object({
    name: z.string()
      .nonempty('name is obrigatory'),
    
    email: z.string()
      .nonempty('email is obrigatory')
      .email('invalid email format'),
    phone: z.string()
      .nonempty('phone number is obrigatory')
      .regex(/^[0-9]+$/, 'must only contain numbers')
      .min(6, 'invalid phone number')
      .max(10, 'invalid phone number'),
  
  })
  
  type CreateUserFormData = z.infer<typeof createUserFormSchema>;


  const { register, 
    handleSubmit, 
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),

  })
  

  function onSubmit(data: CreateUserFormData) {
    goForwards();
    
  }  


  return (
    <>
    <main className='flex flex-col text-[#02295a] md:pt-10 lg:px-16 xl:px-24 max-lg:px-10 md:px-4 max-md:justify-center max-md:pt-6 max-md:px-4 max-md:w-full w-full max-md:pb-3'>
      <h1 className='mb-2 font-ubuntu font-bold text-4xl'>Personal info</h1>
      <p className='text-gray-400'>Please provide your name, email address and phone number.</p>


      <form onSubmit={ handleSubmit(onSubmit)} className='flex flex-col md:gap-5 max-md:gap-3 w-full md:mt-10 max-md:mt-5'>
        <div className='flex flex-col gap-1 relative'>
          <label className='font-medium text-sm' htmlFor='name'>Name {errors.name && <span className='absolute right-0 text-red-500 text-sm font-medium'>{errors.name.message}</span>} </label>
          <input
          type='text' 
          name='name'
          className='border border-zinc-300 shadow-sm rounded h-10 px-3'
          {...register('name', { required: true })}
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          />

        </div>    
        <div className='flex flex-col gap-1 relative'>
          <label className='font-medium text-sm' htmlFor='email'>Email Address {errors.email && <span className='mr-0 absolute right-0 text-red-500 text-sm font-medium'>{errors.email.message}</span>}</label>
          <input  
          type='text' 
          name='email'
          className='border border-zinc-300 shadow-sm rounded h-10 px-3'
          {...register('email', { required: true })}
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          
          />
        </div>  
        <div className='flex flex-col gap-1 relative'>
          <label className='font-medium text-sm' htmlFor=''>Phone Number {errors.phone && <span className='right-0 absolute text-red-500 text-sm font-medium'>{errors.phone.message}</span>}</label>
          <input
          type='text' 
          name='phone'
          className='border border-zinc-300 shadow-sm rounded h-10 px-3'
          {...register('phone', { required: true })}
          value={data.phone || ""}
          onChange={(e) => updateFieldHandler("phone", e.target.value)}
          />
        </div>

        <div className="relative">
        <Button/>
        </div>
      
      </form>
    </main>
    </>
  )
}
