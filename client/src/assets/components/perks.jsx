
import React ,{useState,useEffect} from 'react'
import { FaWifi } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { LuChefHat } from "react-icons/lu";
import { CgGym } from "react-icons/cg";

function Perks(props) {

    const [perks,setPerks]=useState("")
    const {handelperkschange}=props
   const handelclick=(ev)=>{
    const {checked,name} = ev.target;
    if (checked) {
        setPerks([...perks,name]);
      } else {
        setPerks([...perks.filter(selectedName => selectedName !== name)]);
      }
    }
    handelperkschange(perks)
   
  return (
    <div>
        <label className="block text-gray-700 text-lg font-bold mb-2">
        Perks
        </label>
        <div className="grid w-full gap-6 md:grid-cols-3 px-5">
            <div className="flex items-center me-4 ">
                <input  type="checkbox"  onChange={handelclick} name='Wifi' className="w-4 h-4 "/>
                <label  className="ms-2 font-medium flex gap-3 items-center text-black text-lg">Wifi <FaWifi /></label>
            </div>
            <div className="flex items-center me-4 ">
                <input  type="checkbox"  onChange={handelclick} name='cleaning' className="w-4 h-4 "/>
                <label  className="ms-2 font-medium flex gap-3 items-center text-black text-lg">Cleaning  <MdOutlineCleaningServices /></label>
            </div>
            
            <div className="flex items-center me-4">
                <input  type="checkbox" onChange={handelclick} name='Tv' className="w-4 h-4 "/>
                <label  className="ms-2 font-medium text-black flex gap-3 items-center text-lg">Tv <PiTelevision /></label>
            </div>
            <div className="flex items-center me-4">
                <input  type="checkbox"  onChange={handelclick} name='Chef' className="w-4 h-4 "/>
                <label  className="ms-2 font-medium text-black flex gap-3 items-center text-lg">Chef <LuChefHat /> </label>
            </div>
            <div className="flex items-center me-4">
                <input  type="checkbox" onChange={handelclick} name='Gym' className="w-4 h-4 "/>
                <label  className="ms-2 font-medium text-black flex gap-3 items-center text-lg">Gym <CgGym /> </label>
            </div>
            <div className="flex items-center me-4">
                <input  type="checkbox" onChange={handelclick} name='Pets' className="w-4 h-4 "/>
                <label  className="ms-2 font-medium text-black flex gap-3 items-center text-lg">Pets <MdOutlinePets/></label>
            </div>
        </div>
    </div>
  )
}

export default Perks



