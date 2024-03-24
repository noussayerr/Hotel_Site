import React, { useState } from 'react'
import { Carousel,IconButton } from "@material-tailwind/react";
function Photos(props) {
    const {place}=props

  return (
    <Carousel
    className="mx-auto items-center h-72 w-full rounded-lg ">
 {
   place.map((photo,index)=>(
    <img key={index} className="m-auto rounded-xl object-center h-5/6 w-full object-cover" src={`http://localhost:8000/place/${photo}`}/>
    ))
    }
  </Carousel>
    )
}

export default Photos