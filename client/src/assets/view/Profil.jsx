import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
function Profil() {
    const [user,setUser]=useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('/api/profil',{withCredentials: true})
        .then(res=>
            {
            setUser(res.data)})
            .catch(err=>navigate('/'))
    }, []); 

    const handelchange =()=>{
        axios.post('/api/logout',{},{withCredentials: true})
    }
    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString();
      }
  return (
    <div className='container mx-auto px-2 md:px-4 py10'>
        <div className='grid md:grid-cols-12 gap-10'>
            <div className='hidden md:block md:col-span-4 lg:col-span-3 shadow-lg h-fit sticky top-10 bg-[#eff0f2] text-black rounded-lg px-6 py-4'>
                <div>
                    <FaUserCircle className='md:w-[143px] w-28 h-28 md:h-[143px] mx-auto mb-5 ' />
                </div>
            <h1 className='mb-5 text-2xl text-center' >{user.firstName} {user.lastName}</h1>
            <button className='bg-[#469924] hover:bg-[#affa4d] border-black border-2  text-white font-bold py-2 px-4 rounded-lg'
            onClick={handelchange}
            >
            Log out
            </button>
            </div>
                <div className="md:col-span-8 lg:col-span-9">
                <h1 className='text-2xl ' >{user.firstName} {user.lastName}</h1>
                     <p className='text-xs py-2 font-medium'>{formatTimestamp(user.createdAt)}</p>
                </div>
        </div>
    </div>
  )
}

export default Profil