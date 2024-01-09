import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/style/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Signin from './Signin';
import SignUp from './Signup';
import Error from './Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/Signin',
    element: <Signin />
  },
  {
    path: '/Signup',
    element: <SignUp />
  },
  {
    path: '/Error',
    element: <Error />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
