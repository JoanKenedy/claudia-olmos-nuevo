import { Phone } from './Phone'
import { WhatsApp } from './WhatsApp'
import '../index.css'

export const ButtonFixed = () => {
  return (
    <div className='button-fixed w-20 h-20 flex justify-center items-center flex-col fixed bottom-4 right-4 transition z-10 md:w-24 md:h-24'>
      <a
        className='w-16 h-16 tel rounded-full absolute scale-95 bottom-[67px] right-0 bg-blue-900 border-blue-900 border-2 flex justify-center items-center text-white transition-all md:bottom-[90px] md:w-20 md:h-20 hover:transition hover:bg-blue-900/80'
        href='tel:5565095139'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Agendar cita'
      >
        <Phone className='w-8' />
      </a>
      <a
        className='w-16 h-16 whats rounded-full absolute scale-95 bottom-0 right-0 bg-green-500 border-green-500 border-2 flex justify-center items-center text-white transition-all md:w-20 md:h-20 hover:transition hover:bg-green-500/80'
        href='https://wa.me/525565095139?text=Buenas%20tardes,%20solicito%20informaci%C3%B3n%20sobre'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Agendar cita'
      >
        <WhatsApp className='w-8' />
      </a>
    </div>
  )
}
