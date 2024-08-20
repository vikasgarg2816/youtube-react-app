import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-300 rounded-lg px-4 py-2 m-2 shadow-lg'>{name}</button>
    </div>
  )
}

export default Button