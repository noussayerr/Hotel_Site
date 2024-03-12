import { Link } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
import React, { useEffect } from "react"
import Search from "./Search"
import { useState } from "react"
import axios from "axios"
import { FaUser } from "react-icons/fa";
const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
                axios.get('/api/userlogedin',{ withCredentials: true })
                .then(res=>
                    {
                    setIsAuthenticated(res.data.verified)})

                
        }, []); 
       
  return (
    <header className=" py-12 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap xl:flex-nowrap items-center justify-between">
        <div className="w-full md:2/3">
            <Link to='/'  className=" hover:-translate-x-2 duration-500 transition-all font-black text-[#469924] ">Travelicious</Link>
        </div>
            <ul className="ml-10 mt-5 xl:mt-0 flex items-center justify-between w-full lg:w-2/3 ">
                <li>
                    <Search/>
                </li>
                <li className="flex items-center">
                {
                    isAuthenticated?
                    <Link to='/profil' className="mt-5 flex items-center">
                        <FaUser />
                    </Link>
                    :
                    <div className="hidden md:flex mt-5">
                        <Link to={'/create_account'} className="inline-flex w-20 items-center justify-center
               rounded-md border  border-[#469924] px-8 py-2 font-medium text-[#469924] shadow-sm
               focus:outline-none   sm:mt-0 sm:ml-3 sm:w-auto text-sm ">
                        register
                        </Link>
                        <Link to={'/login'} className="inline-flex w-20 items-center justify-center
               rounded-md border border-transparent bg-[#469924] px-8 py-2 font-medium text-[#ffffff] shadow-sm
               focus:outline-none   sm:mt-0 sm:ml-3 sm:w-auto text-sm " >
                        Login

                        </Link>
                    </div>
                    
                }

                </li>
            </ul>
            
    </header>
  )
}

export default Header