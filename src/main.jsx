import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main.jsx';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/AccessControl/Login/Login';
import Registration from './Pages/AccessControl/Registration/Registration';
import AuthProvider from './Providers/AuthProvider';
import Checkout from './Pages/Checkout/Checkout';
import Bookings from './Pages/Bookings/Bookings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'bookings',
        element: <Bookings></Bookings>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
