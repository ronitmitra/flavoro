import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className='flex flex-col md:flex-row justify-between mx-5 py-6'>
        <div>
            <h3 className='text-xl font-bold text-gray-600 font-serif'>{new Date().toUTCString().slice(0,16)}</h3>
            <p className='text-2xl font-mono text-orange-600'>Flavoro Foods</p>
        </div>
        <div>
            <input onChange={(e)=>dispatch(setSearch(e.target.value))} type="search" name="search" id="" placeholder='Search here..' autoComplete='on'
            className='border-2 p-2 rounded-lg font-semibold w-full md:w-[25vw]' 
            />
        </div>
    </nav>
  )
}

export default Navbar