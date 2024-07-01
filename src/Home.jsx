// import React from 'react'
import { Outlet, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

const Home = () => {

  const currentPath = useLocation().pathname.split('/')[1];
  const navigate = useNavigate(); 

  return (
    <div className='flex flex-col w-screen h-screen px-[60px] py-[50px]'>
        <div className='flex items-center text-center text-[14px] text-[#2D1C9F] font-medium'>
            <button className={` w-[200px] py-[16px] border-b-2 ${currentPath == 'users' && ' border-[#2D1C9F] ' } `} onClick={() => navigate('users', { replace: true })}>Users</button>
            <button className={` w-[200px] py-[16px] border-b-2 ${currentPath == 'roles' && ' border-[#2D1C9F] ' } `} onClick={() => navigate('roles', { replace: true })}>Roles</button>
        </div>
        <Outlet />
    </div>
  )
}

export default Home