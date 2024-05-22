'use client'
import ErrorViews from '@/components/template/ErrorView'
import React from 'react'

const ErrorView = ({
    error,
    reset,
  }) => {
  return (
    <div>
        <h1 className='text-red-600 text-center'>error bro... ini errornya ={error.message}</h1>
        <ErrorViews/>
    </div>
  )
}

export default ErrorView