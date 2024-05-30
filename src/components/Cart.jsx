import { MdClose } from "react-icons/md";
import Cartitem from "./Cartitem";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Cart() {
    const navigate = useNavigate()
    const cartProduct = useSelector((state=>state.cart.cart))
    const [activeCart,setActivecart] = useState(false);
    const Totalitem = cartProduct.reduce((acc,item)=> acc+item.qty,0)
    const totalamount = cartProduct.reduce((acc,item)=>acc + item.price*item.qty,0)
    return (
        <>
            <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white z-50 ${activeCart ? "translate-x-0": "translate-x-full"} transition-all duration-500`}>
                <div className="flex justify-between items-center my-2 mx-2">
                    <p className="text-gray-500 text-sm font-bold">My Orders</p>
                    <span onClick={()=>setActivecart(!activeCart)} className="border-2 hover:bg-red-500 hover:text-white rounded-md"><MdClose /></span>
                </div>
                <div className="absolute px-2 text-sm bottom-0 flex flex-col align-middle">
                    <h3 className="">Items: {Totalitem}</h3>
                    <h3 className="mb-2">Total Amount: {totalamount}</h3>
                    <hr/>
                    <button onClick={()=>navigate('/success')}
                    className="bg-green-500 px-2 py-1 text-white rounded-sm font-semibold my-2
                    hover:bg-green-700 lg:w-[18vw] w-[90vw]">Checkout</button>
                </div>
                {cartProduct.length > 0 ? cartProduct.map(item=>{
                    return <Cartitem key={item.id} id={item.id} img={item.img} qty={item.qty} name={item.name} 
                    price={item.price}/>
                }): <h2 className="text-blue-500 p-2 font-serif font-bold text-center">Your Cart is Empty</h2>}
            </div>
           {activeCart ? undefined : <FaShoppingCart onClick = {()=>setActivecart(!activeCart)}className={`fixed right-3 mt-2 lg:bottom-2 text-green-800 text-4xl bg-white rounded-full p-2 hover:scale-110 transition-all duration-300 ${Totalitem>=1 ? "animate-bounce delay-400 transition-all ease-in-out" : 'undefined'}`}/>}
        </>

    )
}

export default Cart