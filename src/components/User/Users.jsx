// import React from 'react'

import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import UserListCell from "./UserListCell";

const Users = () => {

    const userList = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className='h-[calc(100%-54px)] flex gap-x-[40px]'>
            <div className="w-1/2 text-lg text-[#111827] flex flex-col gap-y-[8px] mt-[20px]">
                <button className="h-[42px] w-fit px-[21px] py-[9px] text-[16px] leading-[24px] font-medium text-white rounded-[21px] bg-gradient-to-r from-[#013499] to-[#001133]" onClick={() => navigate('new', { replace: true })}>New User</button>
                <div className="flex justify-between items-center py-[27px] px-[24px] gap-x-[16px] bg-[#D5E6FB2B] rounded-[13px]">
                    <p className=" font-medium  ">All Users</p>
                    <p >Filter </p>
                </div>
                <div className=' overflow-y-auto py-[50px]'>
                    {
                        userList.map((user, index) => (
                            <UserListCell key={index} name={user.name} role={user.role} id={user.id} />
                        ))
                    }
                </div>
            </div>
            <div className="w-[2px] bg-[#E5E7EB]" />
            <div className="w-1/2">
                <Outlet />
            </div>
        </div>
    )
}

export default Users