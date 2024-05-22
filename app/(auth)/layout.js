import React from 'react'

const Authlayout = ({children}) => {
  return (
    <div>
         <header className="h-32 w-full bg-green-300">
          <h1 className="text-lg text-red-600 text-center">Narbar Auth</h1>
        </header>
        {children}
         <footer className="h-32 w-full bg-green-300">
          <h1 className="text-lg text-red-600 text-center">Footer Auth</h1>
        </footer>
        
    </div>
  )
}

export default Authlayout