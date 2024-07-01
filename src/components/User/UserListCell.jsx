
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineModeEdit } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 17,
        height: 17,
        margin: 2,
    },
}));

export default function UserListCell({ name, role, id }) {

    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-between items-center px-[24px] py-[20px] hover:bg-[#D5E6FB2B]">
            <h5 className='w-[40%] cursor-pointer'  onClick={() => navigate(`/users/${id}`, { replace: true })} >{name}</h5>
            <h6 className='w-[40%]'>Role - {role}</h6>
            <div className='w-[20%] flex items-center justify-center gap-x-[7px]'>
                <Android12Switch />
                <MdOutlineModeEdit className='cursor-pointer shrink-0' />
                <BsThreeDotsVertical className='cursor-pointer shrink-0'/>
            </div>
        </div>
    )
}