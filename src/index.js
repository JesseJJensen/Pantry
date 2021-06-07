import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { RecipeProvider as RecipeProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'
//sei-412-pantry.us.auth0.com
//tWeAHqUNwDk4VQjuYdzxLUDiNK722yQA

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='sei-412-pantry.us.auth0.com'
      clientId='tWeAHqUNwDk4VQjuYdzxLUDiNK722yQA'
      redirectUri={window.location.origin}
    >
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

