'use client'
export default function Formulario() {
  return (
    <form action="#" className='space-y-8'>
      <div>
        <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-100'>Tu correo</label>
        <input
          type="email"
          id='email'
          name='email'
          required
          placeholder='name@example.com'
          className='shadow-sm bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3'
        />
      </div>
      <div>
        <label htmlFor="subject" className='block mb-2 text-sm font-medium text-gray-100'>Asunto</label>
        <input
          type="text"
          id='subject'
          name='subject'
          required
          placeholder='¿En qué podemos ayudarte?'
          className='shadow-sm bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3'
        />
      </div>
      <div>
        <label htmlFor="message" className='block mb-2 text-sm font-medium text-gray-100'>Mensaje</label>
        <textarea
          id="message"
          name='message'
          rows="6"
          required
          placeholder='Escribe tu mensaje aquí...'
          className='block p-3 w-full text-sm text-white bg-slate-900 rounded-lg shadow-sm border border-slate-700 focus:ring-green-500 focus:border-green-500'
        ></textarea>
      </div>
      <button type='submit' className='btn'>Enviar mensaje</button>
    </form>
  )
}
