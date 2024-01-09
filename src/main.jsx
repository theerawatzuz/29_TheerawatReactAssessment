import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/style/index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page2 from './Page_2';
import Navbar from './Nav';
import Login from './Login';
import SignUp from './Signup';
import Error from './Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/page-2',
    element: <Page2 />
  },
  {
    path: '/Login',
    element: <Login />
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
