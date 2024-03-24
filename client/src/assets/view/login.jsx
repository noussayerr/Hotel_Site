import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
function Login() {
  
  const {handeluserstate}=useOutletContext();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [errs,setErr]=useState("")
  const navigate = useNavigate()
  const loginuser=(e)=>{
    e.preventDefault();
    axios.post("/api/login",{email,password},{withCredentials: true})

    .then(res=>{

      handeluserstate(res.data.id)
      navigate('/profil')
    })
    .catch(err=>setErr(err.response.data))
  }
  return (
    <div className="w-80 max-w-xl mx-auto md:w-auto">
    <form className="bg-[#D8DBDE] shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4" 
    onSubmit={loginuser}>
      <h1 className='text-center text-2xl'>Login</h1>
      <div className="mb-4">
        <label className="mt-5 block text-gray-700 text-l font-bold mb-2">
          Email
        </label>
        <input className="shadow appearance-none border rounded-lg  w-full py-2 px-3 text-gray-700 leading-tight  " 
        type="text"
        placeholder="email" 
        onChange={(e)=>{setEmail(e.target.value)}}/>
        {
                errs.email?
                <p className='text-[#ff1100]'>{errs.email}</p>
                :
                null
            }
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-l font-bold mb-2">
          Password
        </label>
        <input className="shadow appearance-none border rounded-lg  w-full py-2 px-3 text-gray-700 leading-tight "
        type="password"
        placeholder="******************"
        onChange={(e)=>{setPassword(e.target.value)}} />
        {
                errs.password?
                <p className='text-[#ff1100]'>{errs.password}</p>
                :
                null
            }
      </div>
      <div className="items-center justify-between">
        <button className="w-full bg-[#469924] hover:bg-[#affa4d] text-white font-bold py-2 px-4 rounded-lg  " type="submit">
          Sign In
        </button>
        <Link className="inline-block align-baseline font-bold text-m text-[#469924] hover:text-[#affa4d]" to='/create_account' >
            Create an account !
        </Link>
      </div>
  </form>
</div>
  )
}

export default Login