import React from 'react'
import Highlights from './Highlights'
import { hightlightsSlides } from '../constants'

const VideoCarasol = () => {
  return (
    <>
        <div className='flex items-center'>
            {hightlightsSlides.map((list,i)=>(
                <div key={list.id} id='slider' className='pr-10 sm:pr-20'>
                    <div className='video-carousel_container'>
                        test
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default VideoCarasol