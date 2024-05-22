import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div>
    <header className="h-32 w-full bg-blue-600">
     <h1 className="text-lg text-red-600 text-center">Narbar Main</h1>
   </header>
   {children}
    <footer className="h-32 w-full bg-blue-600">
     <h1 className="text-lg text-red-600 text-center">Footer Main</h1>
   </footer>
   
</div>
  )
}

export default MainLayout