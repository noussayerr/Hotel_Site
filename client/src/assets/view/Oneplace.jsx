import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel} from "@material-tailwind/react";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { LuChefHat } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios';
function Oneplace() {
    const {placeId}=useParams();
    const [place,setPlace]=useState([])
    useEffect(()=>{
      axios.get("/api/oneplace/"+placeId)
      .then((res)=>{
        setPlace(res.data)
      })
      .catch((err)=>console.log(err))
    },[])

    const perkIcons = {
      "Wifi": FaWifi,
      "Pets": MdOutlinePets,
      "Cleaning": MdOutlineCleaningServices,
      "Tv": PiTelevision,
      "Chef": LuChefHat,
      "Gym": CgGym
  };

  return (
    <>
    {
      place.photos?
      <div className='container mx-auto '>
        <p className='text-2xl font-bold px-4  md:px-12 py-2' >{place.title}</p>
      <Carousel
        className="mx-auto items-center md:h-[500px] md:w-11/12 rounded-lg ">
        {
          place.photos.map((photo,index)=>
          <img key={index}  className="m-auto rounded-xl object-center h-full w-full object-cover" src={`http://localhost:8000/place/${photo}`}/>
          )
        }
      </Carousel>

    <div className='md:flex justify-between mt-5'>
      <div className=''>
        <p className='text-lg px-4 md:px-14 font-bold '>{place.description}</p>
        <p className='text-xl px-4  md:px-14 flex items-center ' ><CiLocationOn />{place.address}</p>
        <p className='text-4xl px-4 py-4 md:px-12 '>Offered Amenities </p>
      <div className='w-96 py-4 px-4 grid xl:grid-cols-2 grid-rows-2 md:px-12'>
    {
      place.perks[0].split(",").map((perk,index)=>{
        const Icon = perkIcons[perk];
        return Icon ? 
        <div key={index} className='flex gap-4'>
          <Icon  size={30} />
          <p className='text-lg'>{perk}</p>
        </div>
        
        : null; 
      })
    }
      </div>
      </div>
    
    <div className='md:w-96 w-full mr-4 md:col-span-4 rounded-xl shadow-lg dark:shadow dark:shadow-white sticky  h-fit overflow-auto'>
      <div className='px-7 py-6'>
        <div className='w-full border-b-2 border-[#469924]'>

        </div>
        <h3 className='my-8'>Check-in time {place.checkIn} PM,checkout time {place.checkOut} AM.If you leave behind any items, please contact the receptionist.</h3>
        <form >
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <label>checkIn</label>
              <input type="date" className='w-36' />
            </div>
            <div className='flex flex-col'>
              <label>chechOut</label>
              <input type="date" className='w-36' />
            </div>
          </div>
          <button type='submit' className="rounded-md border bg-[#469924] px-8 py-2 font-medium text-white shadow-sm focus:outline-none mt-10 text-lg ">book</button>
        </form>
      </div>
    </div>

    </div>
    </div>
    :null
    }
    
    </>
  )
}

export default Oneplace