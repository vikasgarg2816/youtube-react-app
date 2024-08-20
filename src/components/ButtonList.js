import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const btnList = ["Music", "Cricket", "Trending", "Soccer", "Live", "Videos", "Kitchen", "News", "Comedy", "Drama", "Education"]
  return (
    <div className='flex'>
        {
            btnList.map((btn) => 
                <Button name={btn}/>
            )
        }
    </div>
  )
}

export default ButtonList