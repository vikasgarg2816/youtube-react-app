import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsController from './CommentsController';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searhParams] = useSearchParams();
    console.log(searhParams.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);

  return (
    <div className='w-full'>
        <div className='p-4 flex'>
            <div>
                <iframe 
                width="900"
                height="500" 
                src={"https://www.youtube.com/embed/"+ searhParams.get("v")}
                title="में वो गुंडा हु जो नंगा होना भी जानता है और नंगा करना भी जनता है - Amrish Puri Khatarnaak Action"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
                </iframe>
            </div>
            <div className='w-full'>
                <LiveChat/>
            </div>
        </div>
        
        <div>
            <CommentsController/>
        </div>
    </div>
  )
}

export default WatchPage