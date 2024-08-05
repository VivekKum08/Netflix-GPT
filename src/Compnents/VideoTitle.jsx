import React from 'react'
import { muteAudio } from '../utils/configSlice'
import { useDispatch } from 'react-redux';

const VideoTitle = ({title, overview}) => {
  const dispatch = useDispatch();
  const mute_unmuteAudio =() => {
    dispatch(muteAudio());
  }
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex flow-root'>
            <div className='float-left'>
            <button className='bg-[#fff] text-black text-x1 p-2 px-8 text-xl rounded hover:bg-opacity-70 items-center'>
                <img   className='w-6 h-6 float-left m-1'
                 src="src\Assets\—Pngtree—black vector play button icon_4231897 (1).png" 
                alt="Play" 
                />Play 
            </button>
            <button className='mx-4 bg-gray-600 text-white p-2 px-8 text-xl rounded hover:bg-opacity-70 items-center'>
              <img className='w-6 h-6 float-left m-1'
              src="src\Assets\icons8-info-100.png"
               alt="Info" />
               More Info</button>
            </div>
               <button  className=' float-right p-2 border rounded-full hover:opacity-70' onClick={mute_unmuteAudio} >
                <img  className='w-7 h-7'
                src="src\Assets\volume-up-4-512.png"
                alt="Mute" />
               </button>

        </div>
    </div>
  )
}

export default VideoTitle