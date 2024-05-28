import Navbar from '@/components/modules/Navbar'
import React from 'react'

const Dashboardlaylout = ({children}) => {
  return (
    <div>
     <Navbar/>
     {/* <input type="text" placeholder='searching' className='border border-green-700'/> */}
        {children}
        <footer className='h-32 w-full bg-yellow-300'>
            <h1 className='text-lg text-red-600 text-center'>footer</h1>
        </footer>
    </div>
  )
}

export default Dashboardlaylout