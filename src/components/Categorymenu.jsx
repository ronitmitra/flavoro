import { useEffect, useState } from "react"
import FoodData from "../Data/FoodData"
import { useDispatch, useSelector} from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
function Categorymenu() {
    const [categories,setCategories] = useState([])
    const dispatch = useDispatch();
    const selectedCategory = useSelector(state=>state.category.category)
    const listOfCategories = ()=>{
        const uniquecategory =[
            ...new Set(FoodData.map(food=>food.category))]      
setCategories(uniquecategory)
console.log(categories)
}

useEffect(()=>{
listOfCategories();
},[])
    return (
        <menu className="mx-5 my-2 mb-5">
            <h2 className="my-3 text-blue-500 font-serif font-semibold px-2">Select A Desired Category</h2>
            <div className="flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
                <button onClick={()=>dispatch(setCategory('All'))} className={`bg-gray-400 font-semibold  p-1 rounded-md text-pink-600 hover:bg-green-500 hover:text-white ${selectedCategory === 'All' && 
                "bg-green-500 text-white"
            }`}>
                    All</button>
                {categories.map((category,i)=>{
                    return <button onClick={()=>dispatch(setCategory(category))}
                    key={i} className = {`bg-gray-400 font-semibold  p-1 rounded-md text-pink-600 hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}>
                    {category}</button>
                })}
            </div>
        </menu>
    )
}
export default Categorymenu