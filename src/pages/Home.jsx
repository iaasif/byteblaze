import { useEffect } from 'react'
import Hero from '../components/Hero'
import wave from '../assets/wave.svg'
import { Helmet } from 'react-helmet-async'
const Home = () => {
  useEffect(() => { }, [])

  return (
    <div className='flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
      <Helmet> <title> Byte blaze || Home</title></Helmet>
      <Hero />
      <img className='absolute bottom-0 w-full' src={wave} alt='' />
    </div>
  )
}

export default Home
