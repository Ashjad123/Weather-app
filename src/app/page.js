'use client'

import axios from 'axios'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import Image from 'next/image'
import Weather from './components/Weather'
import Spinner from '../app/components/loading.gif'

export default function Home() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city }&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response) => {
      setWeather(response.data)
      console.log(response.data)
    })
    setCity('')
    setLoading(false)
  }

  if(loading) {
    return <Spinner />
  } else {
    return (
      <div>
        
        {/* Background Image */}
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/30 z-[1]'/>
        <Image 
          src="https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
          fill
          className='object-cover'
          alt='/'
        />
  
        {/* Search */}
        <div className='relative flex justify-between items-center m-w-[500px] w-full m-auto pt-4 text-white z-10'>
          <form onSubmit={fetchWeather} className='flex justify-between items-center m-auto p-3 bg-transparent border border-gray-300 text-black rounded-2xl'>
            <div>
              <input 
              onChange={(e) => setCity(e.target.value)}
              className='bg-transparent border-none text-white focus:outline-none text-2xl' 
              type="text" 
              placeholder='Enter City name...' 
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={25} color='white' />
            </button>
          </form>
        </div>
  
        {/* Weather */}
        {weather.main && <Weather data={weather} />}
  
  
      </div>    
    )
  }
}
