import { getProfile } from '@/service/server/auth'
import React from 'react'

const Profile = async () => {
  const result = await getProfile()
  const profile = result.data

  return (
    <div>
        <h1>Profile</h1>
        {/* <p>{JSON.stringify(result)}</p> */}
       <ul>
        <li>
          name: {profile.name}
        </li>
        <li>
          email : {profile.email}
        </li>
        <li>
          phone: {profile.phone}
        </li>
       </ul>
    </div>
  )
}

export default Profile