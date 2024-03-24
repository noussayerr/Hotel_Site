import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import Perks from '../components/perks';
import { useNavigate } from "react-router-dom"
import { useOutletContext } from 'react-router-dom'
function Createplace(props) {
  const {user}=useOutletContext();
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [address,setAddress]=useState("")
  const [extraInfo,setExtraInfo]=useState("")
  const [perks,setPerks]=useState("")
  const [checkIn,setCheckin]=useState()
  const [checkOut,setCheckOut]=useState()
  const [maxGuests,setMaxGuests]=useState()
  const [price,setPrice]=useState()
  const [photos,setPhotos]=useState()
  const navigate = useNavigate()
  const handelperkschange=(value)=>{
    setPerks(value)
  }
  const subform = (e) =>{
    e.preventDefault();
    const formData = new FormData()
    for (let i = 0; i < photos.length; i++) {
      formData.append('photo', photos[i]);
    }
    formData.append("owner",user)
    formData.append("title",title)
    formData.append("description",description)
    formData.append("address",address)
    formData.append("extraInfo",extraInfo)
    formData.append("perks",perks)
    formData.append("checkIn",checkIn)
    formData.append("checkOut",checkOut)
    formData.append("maxGuests",maxGuests)
    formData.append("price",price)
    
    axios.post("/api/create",formData,{ headers: {'Content-Type': 'multipart/form-data'}},{withCredentials: true})
    .then(res=>{navigate('/profil')})
    .catch(err=>console.log(err))}
  
  return (
    <div className="w-80 max-w-xl mx-auto md:w-auto">
    <form className="bg-[#D8DBDE] shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4" onSubmit={subform} >
      <h1 className='text-center text-2xl font-bold'>Add Place</h1>
      <div className="mb-4">
        <label className="mt-5 block text-gray-700 text-lg font-bold mb-2">
          Title
        </label>
        <input className="shadow appearance-none border rounded-lg  w-full py-3 px-3 text-gray-700 leading-tight  " 
        type="text" 
        placeholder='Title should be short and catchy' onChange={(e)=>{setTitle(e.target.value)}}/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          Description
        </label>
        <input className="shadow appearance-none border rounded-lg  w-full py-3 px-3 text-gray-700 leading-tight "
        type="text"
        placeholder='Description' onChange={(e)=>{setDescription(e.target.value)}} />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-bold mb-2">
        Address
        </label>
        <input className="shadow appearance-none border rounded-lg  w-full py-3 px-3 text-gray-700 leading-tight "
        type="text"
        placeholder='Address' onChange={(e)=>{setAddress(e.target.value)}} />
      </div>
      <div className="mb-6">
        <Perks handelperkschange={handelperkschange} />
        
      </div>
      
        <div>
        <label className="block text-gray-700 text-lg font-bold mb-2">
            Extra info house rules etc
        </label>
        <textarea className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border h-36' onChange={(e)=>{setExtraInfo(e.target.value)}} />
        </div>

      <div  className=" mt-5 mb-5 grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="block text-gray-700 text-lg font-bold mb-2">Check in &nbsp;&nbsp;time</h3>
            <input type="text"
                  className='w-full border my-1 py-2 px-3 rounded-2xl'
                   placeholder="8" onChange={(e)=>{setCheckin(e.target.value)}}/>
          </div>
          <div>
            <h3 className="block text-gray-700 text-lg font-bold mb-2">Check out time</h3>
            <input type="text"
                  className='w-full border my-1 py-2 px-3 rounded-2xl'
                   placeholder="12" onChange={(e)=>{setCheckOut(e.target.value)}} />
          </div>
          
          <div>
            <h3 className="block text-gray-700 text-lg font-bold mb-2">Guests number</h3>
            <input type="number" placeholder="3"  className='w-full border my-1 py-2 px-3 rounded-2xl' onChange={(e)=>{setMaxGuests(e.target.value)}}/>
          </div>
          <div>
            <h3 className="block text-gray-700 text-lg font-bold mb-2">Price per night</h3>
            <input type="number"  className='w-full border my-1 py-2 px-3 rounded-2xl' onChange={(e)=>{setPrice(e.target.value)}} />
          </div>
        </div>

        <input className='mb-5' type="file" multiple="multiple" onChange={e => setPhotos(e.target.files)} />

      <div className="items-center justify-between">
        <button className="w-full bg-[#469924] hover:bg-[#affa4d] text-white font-bold py-2 px-4 rounded-lg  " type="submit">
          Submit
        </button>
      </div>
  </form>
    </div>
  )
}

export default Createplace