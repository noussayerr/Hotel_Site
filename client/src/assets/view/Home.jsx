import React from 'react'
import { Carousel,IconButton  } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import img from '../photos/img1.jpg'
import img2 from '../photos/img2.jpg'
import img3 from '../photos/img3.jpg'
import img4 from '../photos/img4.jpg'
function Home() {
  return (
    <div className=' px-4 items-center gap-12 container mx-auto ' >
   
          
   <Carousel autoplayDelay={4000} autoplay={true} loop={true}  className="mx-auto items-center h-72 rounded-lg w-full">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="m-auto rounded-xl object-center h-5/6 w-5/6 object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className=" m-auto rounded-xl h-5/6 w-5/6 object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="m-auto rounded-xl h-5/6 w-5/6 object-cover"
      />
    </Carousel>
      <div className="md:flex">
        <div className='h-full align-middle mt-5'>
          <h1 className=' text-2xl font-bold hidden md:grid'>Explore The World</h1>
          <p className='mb-8 md:grid hidden ' >Embark on a seamless travel experience with Travelicious ,
          the app that transforms your wanderlust into reality. 
          Whether you're a solo explorer, 
          a family on vacation, or a group of friends seeking adventure</p>
          <Link to={'explore'} className=' md:text-xl mt-10  bg-[#469924] hover:bg-[#affa4d] text-white font-bold py-3 md:px-8 rounded-lg hidden md:grid w-36'>Explore</Link>
        </div>
        <div className='md:grid  gap-8 grid-cols-1  w-full'>
          <div className='grid  grid-cols-2 gap-8 mb-2 '>
              <img src={img2} className='rounded-2xl overflow-hidden w-96' alt="" />
              <img src={img4} className='rounded-2xl overflow-hidden w-96' alt="" />
          </div>
          <div className='grid grid-cols-2 gap-8'>
              <img src={img} className="rounded-2xl overflow-hidden w-96" alt="" />
              <img src={img3} className='rounded-2xl overflow-hidden w-96' alt="" />
          <Link to={'explore'} className=' md:text-xl   bg-[#469924] hover:bg-[#affa4d] text-white font-bold py-4 px-3 rounded-lg w-20 visible  md:hidden'>Explore</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home