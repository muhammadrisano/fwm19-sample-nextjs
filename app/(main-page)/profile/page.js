"use client"
import { getProfile } from '@/service/auth'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [profile, setProfile] = useState({})
  const handleGetProfile = async()=>{
    try {
      const user = await getProfile()
      setProfile(user)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    handleGetProfile()
  }, [])
  return (
    <div>
        <h1>Profile</h1>
        <p>{JSON.stringify(profile)}</p>
    </div>
  )
}

export default Profile