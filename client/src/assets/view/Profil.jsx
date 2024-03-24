import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useEffect } from "react"
import { useNavigate} from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom';
import { LuPlus } from "react-icons/lu";
import { useOutletContext } from 'react-router-dom'
import Userplaces from '../components/userplaces';
function Profil() {
    const [user,setUser]=useState({})
    const navigate = useNavigate()
    
    const {handellogout}=useOutletContext();
    useEffect(() => {
        axios.get('/api/profil',{withCredentials: true})
        .then(res=>
            {
            setUser(res.data)})
            .catch(err=>navigate('/'))
    }, []); 

    const handelchange =()=>{
        axios.post('/api/logout',{},{withCredentials: true})
        handellogout()
        navigate('/')
    }
    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString();
      }
  return (
    <div className='container mx-auto md:px-4 py10'>
        <div className='grid md:grid-cols-12 gap-10'>
            <div className='hidden md:block md:col-span-4 lg:col-span-3  top-10 text-black rounded-lg px-6 py-4'>
                <div className='flex items-center justify-center'>
                    {
                        user.filename?
                        <img className=' rounded-full w-60 h-60 ' src={`http://localhost:8000/images/${user.filename}`} />
                        :
                        <FaUserCircle className='md:w-[143px] w-28 h-28 md:h-[143px] mx-auto mb-5 ' />
                    }
                </div>
            <h1 className='mb-5 text-2xl text-center' >{user.firstName} {user.lastName}</h1>
            <button className='bg-[#469924] hover:bg-[#affa4d]    text-white font-bold py-2 px-4 rounded-lg'
            onClick={handelchange}
            >
            Log out
            </button>
            </div>
                <div className="md:col-span-8 lg:col-span-9">
                    <div className=' md:hidden flex p-2 bg-[#c4f3b1] items-center gap-4'>
                    {
                        user.filename?
                        <img className=' rounded-full w-20 h-20 ' src={`http://localhost:8000/images/${user.filename}`} />
                        :
                        <FaUserCircle className='md:w-[143px] w-28 h-28 md:h-[143px] mx-auto mb-5 ' />
                    }
                        <h1 className='text-2xl ' >{user.firstName} {user.lastName}</h1>
                    </div>
                       
                    <div className='flex flex-col'>
                        <h1 className='text-2xl px-2'>Your Places  :</h1>
                        <Userplaces />
                        <Link className=' flex gap-2 items-center w-36 bg-[#469924] hover:bg-[#affa4d]
                          text-white font-bold py-2 px-4 rounded-lg ml-2'
                         to={'/add_place'}>
                        <LuPlus />
                            Add Place
                        </Link>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Profil