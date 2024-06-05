import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div>sidebar</div>
      <div>header</div>
      <div>{<Outlet/>}</div>

      <div>Footer</div>
    </>
  )
}

export default Layout