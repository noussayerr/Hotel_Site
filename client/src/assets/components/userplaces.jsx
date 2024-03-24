import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
function Userplaces() {

    const [userplace,setUserplace]=useState()

    useEffect(() => {
        axios.get('/api/userplaces',{withCredentials: true})
        .then(res=>
            {
            setUserplace(res.data)})
    }, []); 

    const handelDelete =(value)=>{
        axios.delete('/api/delete/'+value)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        {userplace?
            <table className="mt-4 mb-4 w-full min-w-max table-auto text-left">
            <thead>
            <tr className='text-center'>
                <th>Title</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                userplace.map((place,index)=>(
                    <tr  key={index} className="cursor-pointer border-y  border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                        <td className='py-2 px-8'>
                        <Link to={"/place/"+place._id} >
                            {place.title}
                        </Link>
                        </td>
                        <td className='py-2 px-8'>
                        <Link to={"/place/"+place._id} >
                            {place.address}
                        </Link>    
                        </td>
                        <td className='py-2 px-8'>
                            <button onClick={(e)=>handelDelete(place._id)}><MdDelete /></button>
                        </td>
                    </tr>
                ))
                }   
                <td></td>
            </tbody>
        </table>
        :null
        }
        
    </div>
  )
}

export default Userplaces