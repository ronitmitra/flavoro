import React from 'react'
import Navbar from '../components/Navbar'
import Categorymenu from '../components/Categorymenu'
import Fooditem from '../components/Fooditem'
import Cart from '../components/Cart'

function Home() {
  return (
    <div>
      <Cart/>
      <Navbar/>
      <Categorymenu/>
      <Fooditem/>
      
    </div>
  )
}

export default Home