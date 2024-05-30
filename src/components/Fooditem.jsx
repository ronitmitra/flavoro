import Card from "./Card"
import FoodData from '../Data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

function Fooditem() {
  const category = useSelector(state => state.category.category);
  const search = useSelector(state=>state.search.search)
  const handleToast = (name) => toast.success(`${name} Added To Cart`)
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap  lg:mx-5 gap-10 mb-5">
        {
          FoodData.filter((food) => {
            if (category === 'All') {
              return food.name.toLowerCase().includes(search.toLowerCase());
            } else {
              return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
            }
          }).map(food=><Card key={food.id} id={food.id} img = {food.img} price={food.price} desc={food.desc} rating = {food.rating} name = {food.name} toast={handleToast}/>)
        }
      </div>
    </>

  )
}

// FoodData.map(food=>{
//   return 
// })
export default Fooditem