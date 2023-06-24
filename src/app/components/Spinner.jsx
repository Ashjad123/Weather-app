import React from 'react'
import Image from 'next/image'
import Spinner from '../app/components/loading.gif'

const Spinner = () => {
  return (
    <div>
        <Image className='w-[200px] m-auto block' src={loading} alt='loading...' />
    </div>
  )
}

export default Spinner