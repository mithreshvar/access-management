// import React from 'react'

import { useLoaderData, useParams } from "react-router-dom";

const NewRoleOrEdit = ({ route = 'roles' }) => {
    const { id } = useParams();
    if (route === "new") {
        return (
            <div className="w-full h-full flex items-center justify-center ">
                <div className=" w-full flex flex-col gap-y-[26px]">
                    <div className="flex flex-col gap-y-[px]">
                        <h1 className="text-[24px] font-medium ">Add New Role</h1>
                        <p className="text-[18px] text-[#6B7280]">This information will be help you give access to other people in your team</p>
                    </div>
                    <div className="w-full bg-[#E5E7EB] h-[1px]"/>

                    <div className="flex justify-between items-center">
                        <h4 className="w-[40%] text-[18px] font-medium">Role Name</h4>
                        <input type="text" className="w-[60%] h-[45px] border border-[#D1D5DB] rounded-[5px] px-[10px]"/>
                    </div>
                    <div className="w-full bg-[#E5E7EB] h-[1px]"/>

                    <div className="flex justify-between items-center">
                        <h4 className="w-[40%] text-[18px] font-medium">Role Name</h4>
                        <textarea className="w-[60%] h-[100px] border border-[#D1D5DB] rounded-[5px] px-[10px] py-[7px]"/>
                    </div>
                    <div className="w-full bg-[#E5E7EB] h-[1px]"/>

                    <div className="flex justify-between items-center">
                        <h2 className="w-[40%] text-[24px] font-medium">Add Permissions</h2>
                        <button className="w-fit h-[50px] px-[25px] py-[13px] bg-[#4F46E5] text-white rounded-[25px]">Add</button>
                    </div>
                    <div className="w-full bg-[#E5E7EB] h-[1px]"/>

                    <div className="text-[18px] flex justify-end items-center gap-x-[16px] ">
                        <button className="w-fit h-[50px] px-[23px] border-2 border-[#D1D5DB] text-[#374151] rounded-[8px]">Cancel</button>
                        <button className="w-fit h-[50px] px-[23px] bg-[#4F46E5] text-white rounded-[8px]">Save</button>
                    </div>
                </div>
            </div>
        );
    } else {

        if (!user) {
            return (
                <div>Role not found {route}</div>
            );
        } else {
            return (
                <div>Edit {id}</div>
            )
        }
    }
}

export default NewRoleOrEdit