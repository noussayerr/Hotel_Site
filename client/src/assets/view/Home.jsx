import React from 'react'
import { Link } from 'react-router-dom'
import img from '../photos/img1.jpg'
import img2 from '../photos/img2.jpg'
import img3 from '../photos/img3.jpg'
import img4 from '../photos/img4.jpg'
function Home() {
  return (
      <div className="flex px-4 items-center gap-12 container mx-auto ">
        <div>
          <h1 className='px-2 text-4xl'>Explore The World</h1>
          <p className='px-4 mb-8 text-xl'>Embark on a seamless travel experience with JourneyPal,
          the app that transforms your wanderlust into reality. 
          Whether you're a solo explorer, 
          a family on vacation, or a group of friends seeking adventure</p>
          <Link to={'explore'} className='m-4 text-xl bg-[#469924] hover:bg-[#affa4d] text-white font-bold py-4 px-8 rounded-lg'>Explore</Link>
        </div>
        <div className='md:grid hidden gap-8 grid-cols-1'>
          <div className='grid  grid-cols-2 gap-8  '>
              <img src={img2} className='rounded-2xl overflow-hidden' alt="" />
              <img src={img4} className='rounded-2xl overflow-hidden' alt="" />
          </div>
          <div className='grid grid-cols-2 gap-8'>
              <img src={img} className="rounded-2xl overflow-hidden" alt="" />
              <img src={img3} className='rounded-2xl overflow-hidden' alt="" />
          </div>
        </div>
      </div>
  )
}

export default Home