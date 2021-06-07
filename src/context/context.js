import React, { useState, useEffect } from 'react'
import mockRepos from './mockData.js/mockRecipes'

import axios from 'axios'

const rootUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'

const RecipeContext = React.createContext()

const RecipeProvider = ({ children }) => {
  return <RecipeContext.Provider>{children}</RecipeContext.Provider>
}

export { RecipeProvider, RecipeContext }
