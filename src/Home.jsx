// import React from 'react'
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col'>
        <p>Home</p>
        <Outlet />
    </div>
  )
}

export default Home