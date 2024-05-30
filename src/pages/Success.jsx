import React, { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners'

function Success() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    {loading ? <RingLoader color="#36d7b7" /> : <div className='text-center'><h2 className='text-green-500 text-2xl font-serif font-semibold'>Order Placed Successfully</h2>
    <p className='text-xl text-violet-600 mt-4'>Congrats! Your Order Is Way To Your Home</p></div>
    }
    </div>

  )
}

export default Success