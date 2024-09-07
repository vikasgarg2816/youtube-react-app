import React from 'react'
import { useReducer } from 'react'

function reducer (state,action) {
  console.log(state,action);
}

const ChatMessage = ({name, message}) => {
  const a = useReducer(reducer,0);
  console.log(a);
  return (
    <div className='flex p-2 shadow-md'>
        <img className='w-6 h-6' alt='user' src='https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0'></img>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
        <button>&times;</button>
    </div>
  )
}

export default ChatMessage