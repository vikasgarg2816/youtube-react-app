import React from 'react'

const VideoCard = ({videoInfo}) => {
  console.log(videoInfo);
  return (
    <div className='m-2 p-2 w-64 shadow-lg'>
        <img 
            className='rounded' 
            alt='thumbnail' 
            src={videoInfo.snippet.thumbnails.medium.url}
        />
        <ul>
            <li className='font-bold py-2'>{videoInfo.snippet.title}</li>
            <li>{videoInfo.snippet.channelTitle}</li>
            <li>{videoInfo.statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard