
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import CustomSwitch from '../CustomSwitch';

export default function RoleListCell({ role, id }) {

    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-between items-center px-[24px] py-[20px] hover:bg-[#D5E6FB2B] border-b-[2px] border-[#E5E7EB] leading-[24px]">
            <h6 className='w-[80%] cursor-pointer' onClick={() => navigate(`/roles/${id}`, { replace: true })} >Role - {role}</h6>
            <div className='w-[20%] flex items-center justify-center gap-x-[7px] text-[#1C1B1F]'>
                <CustomSwitch />
                <MdOutlineModeEdit className='cursor-pointer shrink-0' />
                <BsThreeDotsVertical className='cursor-pointer shrink-0'/>
            </div>
        </div>
    )
}