import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt="image"
          src="/doctors.jpg"
          width={800}
          height={800}
          className="rounded-3xl absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Find and Book 
            <span className='text-primary'> Appointment </span>with your Fav <span className='text-primary'> Doctors </span></h2>

        <p className="mt-4 text-gray-600">
        Discover the ease of booking doctor appointments online with our user-friendly platform. Connect with highly qualified medical professionals and manage your healthcare effortlessly. Your well-being is our priority, ensuring you receive the best care whenever you need it.
        </p>

        <Button className='mt-10'><a href='/search/Dentist'>Explore Now</a> </Button>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
