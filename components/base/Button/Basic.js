import React from 'react'

const Basic = ({title, onClick}) => {
  return (
    <button onClick={onClick}>{title}</button>
  )
}

export default Basic