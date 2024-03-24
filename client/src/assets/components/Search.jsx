import React from 'react'
import { CiSearch } from "react-icons/ci";

function Search() {
  
  
  return (

    <div className="flex items-center">
      <div className="w-full max-w-lg">
        <form className="mt-5 flex gap-1 items-center">
            <input  className="inline w-36 rounded-md border border-gray-300
             bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-[#469924] focus:placeholder-gray-400
              focus:outline-none focus:ring-1 focus:ring-[#469924] text-sm" placeholder="Search ....." type="search" />
              <button type="submit" className="inline-flex items-center justify-center
               rounded-md border border-transparent bg-[#469924] px-2 py-2 font-medium text-white shadow-sm hover:bg-[#affa4d] 
               sm:mt-0 sm:ml-3 sm:w-auto text-sm">Search</button>
        </form>
      </div>
    </div>
  )
}

export default Search