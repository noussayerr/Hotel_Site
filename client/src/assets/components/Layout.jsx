import React from 'react'
import Header from './header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useState } from "react"

function Layout() {
  const [user,setUser]=useState(sessionStorage.getItem('user'))
  const handeluserstate=(logdin)=>{
    setUser(logdin)
    sessionStorage.setItem('user', logdin);
  }

  const handellogout=()=>{
      sessionStorage.removeItem('user');
      setUser("")
    }
  return (
    <div>
        <Header user={user}  />
            <Outlet context={{ user,handeluserstate,handellogout }}/>
        <Footer />
    </div>
  )
}

export default Layout