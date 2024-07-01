import React, { useState } from 'react'

import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import UserListCell from "./UserListCell";
import { Box, Button, FormControl, FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material";
import { IoClose } from 'react-icons/io5';
import data from '../../data/data.json';

const Users = () => {

    const userList = useLoaderData();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            <div className="w-[2px] bg-[#E5E7EB] mt-[40px]" />
            <div className="w-1/2">
                <Outlet />
                <div>
                    <Button onClick={handleOpen}>Open modal</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div className='bg-white absolute top-1/2 left-1/2 flex flex-col gap-10 w-[1028px] h-[480px] rounded-lg py-6 px-8 -translate-x-1/2 -translate-y-1/2'>
                            <div className='w-full py-5 px-6 flex gap-4 items-center border-b-2'>
                                <h1 className='text-[#1A1E26] text-2xl leading-6 font-semibold mr-auto'>Module Access</h1>
                                <button className='bg-[#4F46E5] text-white font-medium text-sm py-2 px-4 rounded-md'>Save Progress</button>
                                <button variant='contained' onClick={handleClose} className='bg-[#FE9494] text-white rounded-[4px] p-[2px] h-fit flex justify-center items-center'><IoClose /></button>
                            </div>
                            <div className='w-full py-6 pl-[100px] flex flex-col gap-4'>
                                <div className='text-sm text-[#374151] font-medium flex'>
                                    <div className='w-[140px] pr-5'>Module name</div>
                                    <div>Role Permissions</div>
                                </div>
                                <div className='flex-col flex text-sm'>
                                    {
                                        data.modules.map((module, index) => (
                                            <div className='flex '>
                                                <div className='w-[120px] pr-5 text-right border-r-2 pt-2.5 font-medium text-[#374151]'>{module}</div>
                                                <div className='pl-5'>
                                                    <FormControl>
                                                        <RadioGroup row>
                                                            <FormControlLabel 
                                                                value="admin" 
                                                                control={<Radio style={{ transform: 'scale(0.8)' }} />} 
                                                                label={<p className="text-sm font-medium mr-10 text-[#111827]">Admin</p>} 
                                                            />
                                                            <FormControlLabel 
                                                                value="read" 
                                                                control={<Radio style={{ transform: 'scale(0.8)' }} />} 
                                                                label={<p className="text-sm font-medium mr-10 text-[#111827]">Read Only</p>} 
                                                            />
                                                            <FormControlLabel 
                                                                value="create" 
                                                                control={<Radio style={{ transform: 'scale(0.8)' }} />} 
                                                                label={<p className="text-sm font-medium mr-10 text-[#111827]">Create</p>} 
                                                            />
                                                            <FormControlLabel 
                                                                value="edit" 
                                                                control={<Radio style={{ transform: 'scale(0.8)' }} />} 
                                                                label={<p className="text-sm font-medium mr-10 text-[#111827]">Edit</p>} 
                                                            />
                                                        </RadioGroup>
                                                    </FormControl>                                                
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Users