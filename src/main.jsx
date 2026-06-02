import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import NewArrivals from './Pages/NewArrivals.jsx'
import Home from './Pages/Home.jsx'
import ShopMen from './Pages/ShopMen.jsx'
import ShopWomen from './Pages/ShopWomen.jsx'
import Footwears from './Pages/Footwears.jsx'
import './index.css'
import ProductDetails from './Pages/ProductDetails.jsx'
import ContactUs from './Pages/ContactUs.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/new-arrivals",
        element: <NewArrivals />
      },

      {
        path: "/shop-men",
        element: <ShopMen />
      },

      {
        path: "/shop-women",
        element: <ShopWomen />
      },

      {
        path: "/footwears",
        element: <Footwears />
      },

      {
        path: "/product-details/:id",
        element: <ProductDetails />
      },

      {
        path: "/contact-us",
        element: <ContactUs />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
