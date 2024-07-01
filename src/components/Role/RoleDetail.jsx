import React from 'react'
import { MdModeEditOutline } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router-dom';

const RoleDetail = () => {
    const { id } = useParams();
    const role = useLoaderData();
    if (!role) {
        return <div>Role not found</div>;
    }
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col w-full gap-10">
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-3xl font-bold text-[#111827]">{role.name}</h1>
                    <button className="h-[50px] w-[114px] border border-[#D1D5DB] hover:bg-[#D1D5DB]/20 text-[#374151] font-medium rounded-[6px] flex justify-center items-center gap-3">Edit <MdModeEditOutline className="text-[#6B7280] text-xl" /> </button>
                </div>
                <div className="flex flex-col w-full text-[#374151]">
                    <div className="p-6 flex border-b-2 border-[#E5E7EB]">
                        <p className="w-1/4 font-medium">Role Description</p>
                        <p className='w-3/4'>{role.description}</p>
                    </div>
                    <div className="p-6 flex border-b-2 border-[#E5E7EB] text-sm">
                        <p className="w-[40%] font-medium">Role Access</p>
                        <ul className="font-medium">
                            {role.accesses.map((item, index) => (
                                <li key={index}>{item.module} - {item.access}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleDetail