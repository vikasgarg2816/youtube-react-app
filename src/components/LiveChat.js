import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generateRandomNames, generateRandomString } from '../Utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store=>store.chat.messages);
    const [sendChatMessage, setsendChatMessage] = useState('');

    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomNames(),
                message: generateRandomString(10)
            }))
        },2000);
        return () => clearInterval(i);
    },[]);


  return (
    <>
        <div className='ml-2 h-[500px] w-full p-2 border border-black bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            {
                chatMessages.map((c)=>
                    <ChatMessage name={c.name} message={c.message}/>
                )
            }
        </div>
        <form 
            className='ml-2 p-2 w-full border border-black' 
            onSubmit={(e)=>{
                    e.preventDefault();
                    dispatch(addMessage({
                        name:'Vikas',
                        message: sendChatMessage
                    }))
                    setsendChatMessage('');
                }     
            }
        >
            <input className='px-2 w-3/4' type='text' onChange={(e)=>setsendChatMessage(e.target.value)} value={sendChatMessage}/>
            <button className='bg-green-300 mx-2 px-2 rounded-lg' >Send</button>
        </form>

    </>
  )
}

export default LiveChat;