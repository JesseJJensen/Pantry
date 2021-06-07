import React from 'react'
import {
  RecipeInfo,
  Recipes,
  MyRecipes,
  Pantry,
  Search,
  Navbar,
} from '../components'
const Dashboard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <RecipeInfo />
      <Recipes />
      <MyRecipes />
      <Pantry />
    </main>
  )
}

export default Dashboard
