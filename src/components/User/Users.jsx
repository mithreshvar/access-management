// import React from 'react'

import { Outlet, useLoaderData } from "react-router-dom";
import UserListCell from "./UserListCell";

const Users = () => {

    const userList = useLoaderData();

    return (
        <div className='flex'>
            <div className="w-1/2 text-lg flex flex-col gap-y-[58px]">
                <div className="flex justify-between items-center py-[27px] px-[24px] gap-x-[16px] bg-[#D5E6FB2B]">
                    <p className=" font-medium  ">All Users</p>
                    <p >Filter </p>
                </div>
                <div className=' overflow-y-auto'>
                    {
                        userList.map((user, index) => (
                            <UserListCell key={index} name={user.name} role={user.role} id={user.id} />
                        ))
                    }
                </div>
            </div>
            <div className="w-1/2">
                <Outlet />
            </div>
        </div>
    )
}

export default Users