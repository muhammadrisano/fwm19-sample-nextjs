'use client'
import React from 'react'
import {useRouter} from 'next/navigation'

const Profile = () => {
  const router = useRouter()

  const handleNavigation = ()=>{
    router.push('/dashboard/contact')
  }
  return (
    <div>
        <h1>Profile</h1>
        <button onClick={handleNavigation} className='py-2 px-4 rounded bg-yellow-300'>pindah ke contact</button>
    </div>
  )
}

export default Profile