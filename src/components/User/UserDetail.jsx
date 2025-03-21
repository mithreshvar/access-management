import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams();
    const user = useLoaderData();
    const navigate = useNavigate();

    if (!user) {
        return <div>User not found</div>;
    }

    const handleEditClick = () => {
        navigate(`/users/edit/${id}`, { replace: true });
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col w-full gap-10">
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-3xl font-bold text-[#111827]">{user.name}</h1>
                    <button className="h-[50px] w-[114px] border border-[#D1D5DB] text-[#374151] font-medium rounded-[6px] flex justify-center items-center gap-3" onClick={handleEditClick}>
                        Edit <MdModeEditOutline className="text-[#6B7280] text-xl" />
                    </button>
                </div>
                <div className="flex flex-col w-full text-[#374151]">
                    <div className="p-6 flex border-b-2 border-[#E5E7EB]">
                        <p className="w-[40%] font-medium">Email ID</p>
                        <p>{user.email}</p>
                    </div>
                    <div className="p-6 flex border-b-2 border-[#E5E7EB] ">
                        <p className="w-[40%] font-medium">Phone Number</p>
                        <p>{user.phone}</p>
                    </div>
                    <div className="p-6 flex border-b-2 border-[#E5E7EB] text-sm">
                        <p className="w-[40%] font-medium">Assigned Role</p>
                        <p>{user.role}</p>
                    </div>
                    <div className="p-6 flex border-b-2 border-[#E5E7EB] text-sm">
                        <p className="w-[40%] font-medium">Module Access & Permits</p>
                        <ul className="font-medium">
                            {user.accesses.map((item, index) => (
                                <li key={index}>{item.module} - {item.access}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
