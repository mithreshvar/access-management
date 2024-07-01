// import React from 'react'

import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

const Roles = () => {

    const userList = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className='h-[calc(100%-54px)] flex gap-x-[40px]'>
            <div className="w-[2px] bg-[#E5E7EB]" />
            <div className="w-1/2">
                <Outlet />
            </div>
        </div>
    )
}

export default Roles