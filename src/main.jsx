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
import ViewCart from './Pages/ViewCart.jsx'
import AdminLayout from './Layouts/AdminLayout.jsx'
import Analytics from './Pages/AdminPages/Analytics.jsx'
import Dashboard from './Pages/AdminPages/Dashboard.jsx'
import Orders from './Pages/AdminPages/Orders.jsx'
import AdminProducts from './Pages/AdminPages/AdminProducts.jsx'
import Customers from './Pages/AdminPages/Customers.jsx'
import Discounts from './Pages/AdminPages/Discounts.jsx'
import Shipping from './Pages/AdminPages/Shipping.jsx'
import Settings from './Pages/AdminPages/Settings.jsx'


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
      },

      {
        path: "/view-cart",
        element: <ViewCart />
      }
    ]
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <h1>404 Not Found</h1>,

    children: [
      {
        index: true,
        element: <Dashboard  />,
      },

      {
        path: "analytics",
        element: <Analytics />
      },

      {
        path: "orders",
        element: <Orders />
      },

      {
        path: "products",
        element: <AdminProducts />
      },

      {
        path: "customers",
        element: <Customers />
      },

      {
        path: "discounts",
        element: <Discounts />
      },

      {
        path: "shipping",
        element: <Shipping />
      },

      {
        path: "settings",
        element: <Settings />
      },

    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
