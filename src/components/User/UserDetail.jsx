// import React from 'react'

import { useParams } from "react-router-dom";

const UserDetail = () => {
    //get the id from the URL
    const { id } = useParams();
  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-col w-full py-3 px-6 gap-10">
            <div className="flex w-full justify-between">
                <h1 className="text-2xl font-bold">User Detail</h1>
                <button>edit</button>
            </div>
            <div className="flex flex-col w-full">
                <div className="p-6 flex border-b-2 ">
                    <p className="w-[40%] font-semibold">Email ID</p>
                    <p>email</p>
                </div>
                <div className="p-6 flex border-b-2 ">
                    <p className="w-[40%] font-semibold">Phone Number</p>
                    <p>email</p>
                </div>
                <div className="p-6 flex border-b-2 ">
                    <p className="w-[40%] font-semibold">Assigned Role</p>
                    <p>email</p>
                </div>
                <div className="p-6 flex border-b-2 ">
                    <p className="w-[40%] font-semibold">Module Access & Permits</p>
                    <p>email</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDetail