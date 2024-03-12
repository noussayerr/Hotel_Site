import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { GoUpload } from "react-icons/go";
import { useNavigate } from "react-router-dom"
function Create() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirm]=useState("")
  const [firstName,setFirstname]=useState("")
  const [lastName,setLastname]=useState("")
  const [phonenumber,setPhonenumber]=useState()
  const [state,setState]=useState("")
  const [errs,setErr]=useState("")
  const navigate = useNavigate()
  const  registeruser = (e)=>{
    e.preventDefault();
    axios.post("/api/register",{email,password,confirmPassword,firstName,lastName,phonenumber,state},{withCredentials: true})
    .then(res=>{
      console.log(res)
      navigate('/profil')
    })
    .catch(err=>setErr(err.response.data.errors))
    
  }

  return (
    <div className="w-80 max-w-xl mx-auto md:w-auto ">
    <form className="bg-[#D8DBDE] shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4 " 
    onSubmit={registeruser}>
      <h1 className='text-center text-2xl'>Create an account</h1>
      <div className="mb-6">
        <label className="mt-5 block text-gray-700 text-l font-bold mb-2" >
          Email
        </label>
        <input className="shadow appearance-none border rounded-lg  w-full py-2 px-3 text-gray-700 leading-tight "
         type="text" 
         placeholder="Email" 
         
         onChange={(e)=>setEmail(e.target.value)} />
         {
                errs.email?
                <p className='text-[#ff1100]'>{errs.email.message}</p>
                :
                null
            }
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-l font-bold mb-2">
          Password
        </label>
        <input className="shadow appearance-none border rounded-lg  w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
         type="password" 
         placeholder="******************" 
         
         onChange={(e)=>setPassword(e.target.value)} />
      {
                errs.password?
                <p className='text-[#ff1100]'>{errs.password.message}</p>
                :
                null
            }
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-l font-bold mb-2" >
        Confirm password
        </label>
        <input className="shadow appearance-none border rounded-lg  w-full py-2 px-3 text-gray-700 mb-3 leading-tight" 
        type="password" 
        placeholder="******************" 
        
        onChange={(e)=>setConfirm(e.target.value)} />
        {
                errs.confirmPassword?
                <p className='text-[#ff1100]'>{errs.confirmPassword.message}</p>
                :
                null
            }
      </div>
      <div className='flex justify-between'>
        <div className="mb-6">
            <label className="block text-gray-700 text-l font-bold mb-2" >
                First name
            </label>
            <input className="shadow appearance-none border rounded-lg w-28 md:w-full py-2 px-3 text-gray-700 leading-tight " 
            type="text"
            placeholder="First name" 
            
            onChange={(e)=>setFirstname(e.target.value)} />
            {
                errs.firstName?
                <p className='text-[#ff1100]'>{errs.firstName.message}</p>
                :
                null
            }
        </div>
        <div className="mb-6">
            <label className=" block text-gray-700 text-l font-bold mb-2 " >
            Last name
            </label>
            <input className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight w-28 md:w-full " 
            type="text" 
            placeholder="Last name"
            
            onChange={(e)=>setLastname(e.target.value)}  />
            {
                errs.lastName?
                <p className='text-[#ff1100]'>{errs.lastName.message}</p>
                :
                null
            }
        </div>
        
      </div>
      <div className='flex justify-between'>
        <div className="mb-6">
            <label className="block text-gray-700 text-l font-bold mb-2" >
            Phone number
            </label>
            <input className="shadow appearance-none border rounded-lg w-28 md:w-full py-2 px-3 text-gray-700 leading-tight "
             type="number" 
             placeholder="Phone number"
             
            onChange={(e)=>setPhonenumber(e.target.value)}  />
            {
                errs.phonenumber?
                <p className='text-[#ff1100]'>{errs.phonenumber.message}</p>
                :
                null
            }
        </div>
        <div className="mb-6">
            <label className=" block text-gray-700 text-l font-bold mb-2 " >
            State
            </label>
            <input className="shadow appearance-none border rounded-lg   py-2 px-3 text-gray-700 leading-tight w-28 md:w-full" 
            type="text" 
            placeholder="State"

            onChange={(e)=>setState(e.target.value)} />
            {
                errs.state?
                <p className='text-[#ff1100]'>{errs.state.message}</p>
                :
                null
            }
        </div>
        
      </div>
        <div className="items-center justify-between">
        <button className=" bg-[#469924] hover:bg-[#affa4d] border-black border-2 text-white font-bold py-2 px-4 rounded-lg  " type="submit">
            Register new account
        </button>
        </div>
    </form>
</div>
  )
  
}

export default Create