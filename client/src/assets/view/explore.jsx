import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel,IconButton ,Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,} from "@material-tailwind/react";
import Photos from '../components/photos';
function Explore() {
  
  const [places,setPlaces]=useState([])

  useEffect(()=>{
      axios.get("/api/allplaces")
      .then((res)=>setPlaces(res.data))
      .catch((err)=>console.log(err))
  },[])

  return (
      <div  className=' md:flex items-center justify-center container mx-auto  ' > 
      <div className="lg:grid xl:grid-cols-3 md:grid-cols-2 grid-rows-2 md:gap-5">

      {
        places.map((place,index)=>(
          <Card key={index} className="mt-6 w-96 h-96 mb-5">
                <CardHeader >
                    <Photos place={place.photos} />
                </CardHeader>
                <Link to={"/place/"+place._id}>
                <CardBody>
                  <Typography variant="h5"  className="mb-2">
                    {place.title}
                  </Typography>
                  <Typography>
                    {place.description}
                  </Typography>
                  
                </CardBody>
                <CardFooter className="pt-0 gap-4">
                  <Typography variant="h5" className='flex gap-4 items-center justify-end' >
                    ${place.price}
                    <Button className='bg-[#469924]'>Book</Button>
                  </Typography>
                </CardFooter>
                </Link>
              </Card>
        ))
      }
      </div>
    </div>
  )
}

export default Explore