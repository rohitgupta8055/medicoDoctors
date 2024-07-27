"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { usePathname } from 'next/navigation';
  

function CategoryList() {
    const [categoryList,setCategoryList]=useState([]);
    const params=usePathname();
    const category=params.split('/')[2];
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
    <div className='h-screen mt-5  fixed flex flex-col'>
      <Command>
  <CommandInput placeholder="Type a command or search..."/>
  <CommandList className="overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
        {categoryList && categoryList.map((item,index)=>(
                <Link key={index} href={'/search/'+item?.attributes?.Name}>   
            <CommandItem className='data-[disabled]:opacity-95'>
    
                <div className={`p-2  flex gap-2 text-[14px] text-blue-600 items-centers- rounded-md cursor-pointer w-full 
                ${category==item.attributes.Name&&'bg-blue-100'}
                `}>
                    <Image  src={item?.attributes?.Icon?.data[0].attributes?.url}
                    alt='icon'
                    width={25}
                    height={25}
                    />
                <label>{item?.attributes?.Name}</label>
                </div>
                
            </CommandItem>
            </Link>
        ))}
        

    </CommandGroup>
  </CommandList>
</Command>



    </div>
  )
}

export default CategoryList
