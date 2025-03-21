
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import CustomSwitch from '../CustomSwitch';

export default function UserListCell({ name, role, id }) {

    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-between items-center px-[24px] py-[20px] hover:bg-[#D5E6FB2B] border-b-[2px] border-[#E5E7EB] leading-[24px]">
            <h5 className='w-[40%] cursor-pointer'  onClick={() => navigate(`/users/${id}`, { replace: true })} >{name}</h5>
            <h6 className='w-[40%]'>Role - {role}</h6>
            <div className='w-[20%] flex items-center justify-center gap-x-[7px] text-[#1C1B1F]'>
                <CustomSwitch />
                <MdOutlineModeEdit className='cursor-pointer shrink-0' />
                <BsThreeDotsVertical className='cursor-pointer shrink-0'/>
            </div>
        </div>
    )
}