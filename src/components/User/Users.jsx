// import React from 'react'

import { Outlet } from "react-router-dom";
import UserList from "./UserList";

const Users = () => {
  return (
    <div className='flex'>
        <div className="w-1/2">
            <p>Users</p>
            <UserList />
        </div>
        <div className="w-1/2">
            <Outlet />
        </div>
    </div>
  )
}

export default Users