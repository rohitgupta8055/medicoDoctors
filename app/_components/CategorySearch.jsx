"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import Image from 'next/image'
import GlobalApi from '../_utils/GlobalApi'
import Link from 'next/link'

function CategorySearch() {

  // const [categoryList,setCategoryList]=useState([]);

  // useEffect(()=>{
  //   getCategoryList()
  // },[])
  // const getCategoryList=()=>{
  //   GlobalApi.getCategory().then(resp=>{
  //     console.log(resp.data.data);
  //     setCategoryList(resp.data.data);
  //   })
  // }

  const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList()
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }
  return (
    <div className='mb-10 items-center px-5 flex flex-col gap-4'>
      <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
      <h2 className='text-gray-500 text-xl'>Search Your Doctor and Book Appointment in one Click</h2>

      <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
      <Input type="text" placeholder="Search..." />
      <Button type="submit"> <Search className='h-4 w-4 mr-2'/> Search</Button>
      </div>
      
         {/* Display List of Categories */}
         <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5'>
         {categoryList.length>0?categoryList.map((item,index)=>index<6&&(
          <Link  href={'/search/'+item?.attributes?.Name} key={index} className='cursor-pointer hover:scale-110 transition-all ease-in-out flex flex-col text-center gap-2 items-center p-5 m-2 bg-blue-50 rounded-lg'>
            
            {/* {item?.attributes?.Icon?.data[0].attributes?.url} */}
           <Image src={item?.attributes?.Icon?.data[0].attributes?.url}
            alt='icon'
            width={150}
            height={150}/>
            <label className='text-blue-600 text-sm'>{item?.attributes?.Name}</label>
          </Link>
         ))
         :
         [1,2,3,4,5,6].map((item,index)=>(
          <div className='w-[130px] h-[120px] m-2 bg-slate-200 animate-pulse rounded-lg'>

          </div>          
         ))
        
         }
         </div>
    </div>
  )
}

export default CategorySearch
