import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoController = () => {

    const [videoData, setvideoData] = useState([]);

    useEffect (()=> {
        getVideosData();
    },[])

    const getVideosData = async () => {
        const res = await fetch(YOUTUBE_VIDEO_API);
        const jsondata = await res.json();
        console.log(jsondata);
        setvideoData(jsondata.items)
    }

  return (
    <div className='flex flex-wrap'>
        {videoData.map((video)=>(
            <Link to={"/watch?v="+video.id}>
                <VideoCard key={video.id} videoInfo={video}/>
            </Link>
        ))}
    </div>
  )
}

export default VideoController