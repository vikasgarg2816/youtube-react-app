import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const [searhParams] = useSearchParams();
    console.log(searhParams.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);

  return (
    <div className='p-4'>
        <iframe 
         width="1000"
         height="500" 
         src={"https://www.youtube.com/embed/"+ searhParams.get("v")}
         title="में वो गुंडा हु जो नंगा होना भी जानता है और नंगा करना भी जनता है - Amrish Puri Khatarnaak Action"
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerpolicy="strict-origin-when-cross-origin" 
         allowfullscreen>
        </iframe>
    </div>
  )
}

export default WatchPage