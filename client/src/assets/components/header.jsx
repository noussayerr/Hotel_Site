import { Link } from "react-router-dom"

import React, { useEffect } from "react"
import Search from "./Search"
import { useState } from "react"
import axios from "axios"
import { FaUser } from "react-icons/fa";
const Header = (props) => {
    
    const {user}=props;
  return (
    <header className=" py-8 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap xl:flex-nowrap items-center justify-between">
        <div className="w-full md:2/3">
            <Link to='/'  className=" hover:-translate-x-2 duration-500 transition-all font-black text-[#469924] ">Travelicious</Link>
        </div>
            <ul className=" gap-4 mt-5 xl:mt-0 flex items-center w-full lg:w-2/3 ">
                <li>
                    <Search/>
                </li>
                <li className="px-36 flex items-center">
                {
                    user?
                    <Link to='/profil' className="mt-5 flex items-center">
                        <FaUser />
                    </Link>
                    :
                    <div className=" px-2 gap-1 flex mt-5">
                        <Link to={'/create_account'} className="inline-flex w-20 items-center justify-center
               rounded-md border  border-[#469924] px-4 md:px-8 py-2 font-medium text-[#469924] shadow-sm
               focus:outline-none   sm:mt-0 sm:ml-3 sm:w-auto text-sm ">
                        register
                        </Link>
                        <Link to={'/login'} className="inline-flex w-20 items-center justify-center
               rounded-md border border-transparent bg-[#469924] px-4 md:px-8 py-2 font-medium text-[#ffffff] shadow-sm
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