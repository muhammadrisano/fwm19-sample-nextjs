import React from 'react'
import { getCookie } from '@/service/utils'
const MainLayout = ({children}) => {
  const token = getCookie('token')

  return (
    <div>
    <header className="h-32 w-full bg-blue-600" i>
     <h1 className="text-lg text-red-600 text-center">Narbar Main = {token}</h1>
   </header>
   {children}
    <footer className="h-32 w-full bg-blue-600">
     <h1 className="text-lg text-red-600 text-center">Footer Main</h1>
   </footer>
   
</div>
  )
}

export default MainLayout