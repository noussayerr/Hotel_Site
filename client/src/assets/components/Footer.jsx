import React from 'react'
import { Link } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs'
import { FaFacebook, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";

import { CiLocationOn } from 'react-icons/ci';
import { IoLogoInstagram } from 'react-icons/io';
function Footer() {
  return (
    <footer className='mt-16 '>
        <div className="container py-3 mx-auto px-4  border-t-2 border-black">
            <Link to='/' className='font-black text-[#469924]'>Travelicious</Link>
            <div className='px-3 py-3'>
                <Link >Contact</Link>
                <div className=' py-5 flex flex-wrap md:flex-nowrap gap-16 items-center justify-between'>
                    <div className='flex-1 md:text-right'>
                    <div className='py-5 flex flex-wrap md:flex-nowrap items-center gap-2 '>
                        <BsTelephone />
                        <p >00-000-000</p>
                    </div>
                    <div className='py-3 flex flex-wrap md:flex-nowrap text-md items-center gap-2'>
                        <CiLocationOn />
                        <p>Location</p>
                    </div>
                    <div className='py-3 flex text-md '>
                        <p>Newroom</p>
                    </div>
                    <div className='py-3 flex text-md '>
                        <p >New features</p>
                    </div>
                    
                    </div>

                    <div className='flex-1 md:text-right'>
                        <p className='py-3'>Our Story</p>
                        <p className='py-3'>Get in Touch</p>
                        <p className='py-3'>Fitness</p>
                        <p className='py-3'>Customer Assistance</p>
                    </div>

                    <div className='flex-1 md:text-right'>
                        <p className='py-3'>New features</p>
                        <p className='py-3'>Dining Experience</p>
                        <p className='py-3'>Terms of service</p>
                        <p className='py-3'>Events</p>
                    </div>
                </div>
                <div className='flex items-center flex-wrap md:flex-nowrap justify-between border-t-2 border-[#DDDDDD] py-4'>
                    <p>&copy;2024 hotel</p>
                    <div className='flex items-center gap-4 py-4 md:py-0'>
                        <FaFacebook />
                        <IoLogoInstagram />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer




