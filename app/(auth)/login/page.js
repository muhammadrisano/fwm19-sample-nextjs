"use client"
import { login } from '@/service/auth'
import { useRouter } from 'next/navigation'
// import React, {useRef, useEffect} from 'react'
import React from 'react'


const Login = () => {
  const router = useRouter()
  // const email = useRef(null)
  // const password = useRef(null)

  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   const payload = {
  //     email: email.current.value,
  //     password: password.current.value
  //   }
  //   console.log(payload);
  //   email.current.value = ""
  //   password.current.value = ""
  // }
  
  // useEffect(()=>{
  //   email.current.focus()
  // }, [])
  const handleFormData = async(formData)=>{
    try {
      const email = formData.get('email')
      const password = formData.get('password')
      const payload = {
        email,
        password
      }
      login(payload)
      // formData.reset()
      router.push('/profile')
    } catch (error) {
      console.log(error);
    }
  
  }


  return (
    <div>
        <h1>page login</h1>
        <form action={handleFormData}>
        <ul>
          <li>
            {/* <input type="email" ref={email} className='border border-gray-500' /> */}
            <input type="email" name="email" className='border border-gray-500' />
          </li>
          <li>
            {/* <input type="password" ref={password} className='border border-gray-500' /> */}
            <input type="password" name="password"  className='border border-gray-500' />
          </li>
          <li>
            <button className='px-4 py-2 rounded-md bg-yellow-300'>Login</button>
          </li>
        </ul>
        </form>
        
    </div>
  )
}

export default Login