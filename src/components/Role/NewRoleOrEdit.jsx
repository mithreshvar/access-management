// import React from 'react'

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { FormControl, FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material";
import { IoClose } from 'react-icons/io5';
import data from '../../data/data.json';

const NewRoleOrEdit = ({ route = 'edit' }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [roleData, setRoleData] = useState(
        route === "edit" ? 
        useLoaderData() :
        {
            name: '',
            description: '',
            accesses: []
        }
    )

    useEffect(() => {
        if (route === 'new') {
            setRoleData({
                name: '',
                description: '',
                accesses: []
            })
        }
    }, [route]) 

    function handleChange(e) {
        const { id, value } = e.target;
        setRoleData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    return (
        <div className="w-full h-full flex items-center justify-center ">
            <div className=" w-full flex flex-col gap-y-[26px]">
                <div className="flex flex-col gap-y-[px]">
                    <h1 className="text-[24px] font-medium ">{route === 'new' ? "Add New Role" : "Edit Role"}</h1>
                    <p className="text-[18px] text-[#6B7280]">This information will be help you give access to other people in your team</p>
                </div>
                <div className="w-full bg-[#E5E7EB] h-[1px]"/>

                <div className="flex justify-between items-center">
                    <h4 className="w-[40%] text-[18px] font-medium">Role Name</h4>
                    <input id={'name'} type="text" value={roleData.name} onChange={handleChange} className="w-[60%] h-[45px] border border-[#D1D5DB] rounded-[5px] px-[10px]"/>
                </div>
                <div className="w-full bg-[#E5E7EB] h-[1px]"/>

                <div className="flex justify-between items-center">
                    <h4 className="w-[40%] text-[18px] font-medium">Role Name</h4>
                    <textarea id={'description'} value={roleData.description} onChange={handleChange}  className="w-[60%] h-[100px] border border-[#D1D5DB] rounded-[5px] px-[10px] py-[7px] resize-none"/>
                </div>
                <div className="w-full bg-[#E5E7EB] h-[1px]"/>

                <div className="flex justify-between items-center">
                    <h2 className="w-[40%] text-[24px] font-medium">Add Permissions</h2>
                    <button className="w-fit h-[50px] px-[25px] py-[13px] bg-[#4F46E5] text-white rounded-[25px]" onClick={handleOpen}>Add</button>
                </div>
                <div className="w-full bg-[#E5E7EB] h-[1px]"/>

                <div className="text-[18px] flex justify-end items-center gap-x-[16px] ">
                    <button className="w-fit h-[50px] px-[23px] border-2 border-[#D1D5DB] text-[#374151] rounded-[8px]">Cancel</button>
                    <button className="w-fit h-[50px] px-[23px] bg-[#4F46E5] text-white rounded-[8px]">Save</button>
                </div>
            </div>
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
                                    <div className='flex ' key={'module'+index}>
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
    );
}

export default NewRoleOrEdit