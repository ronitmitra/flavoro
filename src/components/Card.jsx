import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTocart } from "../redux/slices/Cartslice";
function Card({img,price,name,desc,rating,id,toast}) {
  const dispatch = useDispatch();
  return (
    <div className="w-[250px] flex flex-col mx-5 bg-white rounded-lg gap-2">
        <div className="w-[200px] mx-auto mt-2">
        <img src={img}
        alt="{name}"
         className="w-[180px] h-[120px] hover:scale-105 transition-all duration-500 ease-in-out cursor-grab"/>
        </div>      
        <div className="px-2 w-[250px] flex justify-between">
            <p className="text-sm font-bold font-mono">{name}</p>
            <p className="text-green-500 text-sm font-bold">₹{price}</p>
        </div>
        <p className="text-sm px-1 font-serif">{desc.slice(0,50)}...</p>
        <div className="flex justify-between items-center mb-2 mx-2 my-1">
          <span className="flex justify-center text-sm cursor-pointer"><FaStar  className="text-yellow-500"/> &nbsp;{rating}</span>
          <button onClick = {()=>{
            dispatch(addTocart({id,name,price,rating,qty:1,img}))
            toast(name);
          }} className="text-sm p-1 bg-green-400 text-white rounded-md hover:scale-105 transition-all duration-300">
            Add To Cart</button>
        </div>

    </div>
  )
}

export default Card