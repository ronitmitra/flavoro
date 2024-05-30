import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { IncrementFn } from '../redux/slices/Cartslice';
import { DecrementFn } from '../redux/slices/Cartslice';
import { removeFromcart } from '../redux/slices/Cartslice';
import toast from 'react-hot-toast';
function Cartitem({id,img,name,qty,price}) {
  const dispatch = useDispatch()
  return (
     <div className='flex gap-5 justify-evenly shadow-lg mb-1 rounded-lg'>
        <div className='w-1/3 m-1'>
        <img src ={img}
         alt={name}
         className='w-[70px] h-[50px]'
         />
         </div>       
         <div className='w-2/3 m-1'>
            <div className='flex items-center gap-4'><h2 className='px-2 font-semibold font-serif text-blue-500 cursor-pointer'>{name}</h2>
            <MdDelete onClick={()=>{
              dispatch(removeFromcart({id}));
          toast.success('One Item Removed',{
            icon: '✋',
          });
          }} className='text-gray-700 cursor-pointer'/>
            </div>
            <div className='flex gap-6'>
                <div><p className='pl-2 font-mono font-semibold text-green-400'>₹ {price}</p></div>
                <div className='flex items-center justify-evenly'>
                    <CiSquarePlus onClick={()=>dispatch(IncrementFn({id}))}  className='text-blue-500 font-semibold hover:text-green-500 hover:scale-125
                    transition-all duration-300 ease-in-out'/>
                    <span className='text-sm font-bold text-red-600'>{qty}</span>
                    <CiSquareMinus onClick={()=>qty>1 ? dispatch(DecrementFn({id})): dispatch(removeFromcart({id}))}
                     className='text-blue-500 font-semibold hover:text-green-500 hover:scale-125
                    transition-all duration-300 ease-in-out'/>
                </div>
            </div>
         </div>
    </div>
   
  )
}

export default Cartitem