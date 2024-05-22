import React from 'react'
import {notFound} from 'next/navigation'

const Category = ({params}) => {
  if(params.slug.length <3){
    notFound()
  }
  return (
    <div>
      {/* <p>{JSON.stringify(params)}</p> */}
      <p>id product : {params.slug[0]}</p>
      <p>category name : {params.slug[1]}</p>
      <p>id bla : {params.slug[2]}</p>
        {/* <ul>
            <li>
                product id = {params.id}
            </li>
            <li>
                type category = {params.category}
            </li>
        </ul> */}
    </div>
  )
}

export default Category