import React from 'react'
import { BiCustomize } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { signOutStart,signOutFailure,signOutSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Sidebar() {

    const dispatch = useDispatch();
const navigate = useNavigate();
    

    const handleSignOut = async () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, sign out!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    dispatch(signOutStart());
                    const res = await fetch('/api/user/sign-out');
                    const data = await res.json();
                    if (data.success === false) {
                        dispatch(signOutFailure(data.message));
                        Swal.fire({
                            title: 'Error',
                            text: data.message,
                            icon: 'error',
                        });
                        return;
                    }
                    dispatch(signOutSuccess(data))
                    Swal.fire({
                        title: 'Sign out!',
                        text: 'You have signed out successfully.',
                        icon: 'success',
                    });
                    navigate('/');
                }catch (error) {
                    dispatch(signOutFailure(error.message));
                    Swal.fire({
                        title: 'Error',
                        text: error.message,
                        icon: 'error',
                    });
                }
            }
          });

        
    }

  return (
    <div className='bg-gray-800 text-white p-5 min-h-screen'>
        <div className='flex flex-row gap-3'>
            <BiCustomize className='text-2xl' />
            <h1>Customize Portfolio</h1>
        </div>
        <div>
            <ul className='mt-5'>
                <li className='py-2'>Basic Info</li>
                <li className='py-2'>Social Media</li>
                <li className='py-2'>Projects</li>
                <li className='py-2'>Education</li>
                <li className='py-2'>Certificate</li>
                <li className='py-2'>Work Experience</li>
                <li className='py-2'>Contact</li>
                <li className='py-2'></li>
                <li className='py-2 flex flex-row items-center gap-2 text-green-600'><IoSettingsOutline /> Settings</li>
                <li className='py-2 flex flex-row items-center gap-2 text-red-600 cursor-pointer' onClick={handleSignOut}><VscSignOut /> Sign Out</li>
            </ul>
        </div>
    </div>
  )
}
