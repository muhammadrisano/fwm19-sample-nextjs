"use client"
import { logout } from '@/service/client/auth'
// import { getProfile } from '@/service/server/auth'
import { useRouter } from 'next/navigation'
import React from 'react'

const Profile =  () => {
  const router = useRouter()
  // const result = await getProfile()
  // const profile = result.data

  const handleLogout = async()=>{
    try {
      await logout()
      router.push('/login')
    } catch (error) {
      alert('error')
    }
  }
  return (
    <div>
        <h1>Profile</h1>
        {/* <p>{JSON.stringify(result)}</p> */}
       <ul>
        {/* <li>
          name: {profile.name}
        </li>
        <li>
          email : {profile.email}
        </li>
        <li>
          phone: {profile.phone}
        </li> */}
       </ul>
       <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Profile