import React, { Suspense } from 'react'
import WrapperCard from './WrapperCard'

const page = () => {
  return (
    <div>
            <h1 className="text-3xl text-center font-bold">My recipe </h1>
            <Suspense fallback={<h1 className='text-lg font-bold'>loading..........</h1>}>
            <WrapperCard/>
            </Suspense>
    </div>
  )
}

export default page