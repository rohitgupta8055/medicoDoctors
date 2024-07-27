"use client"
import React, { useEffect } from 'react'
//import image 
import Image from 'next/image'
//import Button
import { Button } from '@/components/ui/button'
//import link
import Link from 'next/link'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
function Header() {
    const Menu=[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'Explore',
            path:'/explore'
        },
        {
            id:3,
            name:'Contact Us',
            path:'/'
        },
    ]

    const {user} = useKindeBrowserClient();

    useEffect(()=>{
        // console.log(user);
    },[user])
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
        <div className='flex items-center gap-10'>
        <Image src='/logo.svg' alt='logo' width={180} height={80}/>

        <ul className='md:flex gap-8 hidden'>
        {Menu.map((item,index)=>[
        <Link href={item.path}>  <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li></Link>
        ])}
        </ul>
        </div>
        {user?
                <Popover>
                <PopoverTrigger>
                <Image src={user?.picture} alt='profile-image' width={50} height={50} 
                className='rounded-full'/>
                </PopoverTrigger>
                <PopoverContent className='w-44'>
                    <ul className='flex flex-col gap-2'>
                        <li className='cursor-pointer
                        hover:bg-slate-100 rounded-md'>Profile</li>
                        <Link href={'/my-booking'} className='cursor-pointer
                        hover:bg-slate-100 rounded-md'>My Bookings</Link>
                        <li className='cursor-pointer
                        hover:bg-slate-100 rounded-md'><LogoutLink>Logout</LogoutLink></li>
                    </ul>
                </PopoverContent>
                </Popover>
              

                // <LogoutLink><Button variant="outline">Log out</Button></LogoutLink>
            :
                <LoginLink><Button>Get Started</Button></LoginLink>
        }
    </div>
  )
}

export default Header
