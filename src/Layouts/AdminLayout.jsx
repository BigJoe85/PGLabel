import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminMenu from '../Components/AdminComponents/AdminMenu'

const AdminLayout = () => {
  return (
    <div className='flex'>
      <AdminMenu />
      <Outlet />
    </div>
  )
}

export default AdminLayout
