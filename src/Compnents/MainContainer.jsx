import React from 'react'
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux'
import Video_Background from './Video_Background';



const MainContainer = () => {
  const movies = useSelector(store=> store.movies?.nowPlayingMovies);

  if(!movies) return;

  const mainMovie= movies[0];
  // console.log(mainMovie);

  const {original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <Video_Background movieId={id}/>
    </div>
  )
}

export default MainContainer