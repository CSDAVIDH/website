'use client'
import Button from "../navbar/Button"

export default function Formulario() {
  return (
    <>
      <form action="#" className='space-y-8 items-center'>
        <div>
          <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your email</label>
          <input type="text" id='email' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com.com' />
        </div>
        <div>
          <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Object</label>
          <input type="text" id='email' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you' />

        </div>
        <div className='sm:col-span-2'>
          <label htmlFor="message" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'> Your message</label>
          <textarea id="message" rows="6" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment...'></textarea>
        </div>
        <div className=''> <Button link="#" text="Send message" /></div>
      </form>
    </>
  )

}