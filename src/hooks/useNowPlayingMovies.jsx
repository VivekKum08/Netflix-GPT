import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies =() => {
    const dispatch =useDispatch();

    const getNowPlayingMovies = async ()=> {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
      API_Options
      );
      const movies = await data.json();
      const d1=movies.results;
      // console.log(d1)
      dispatch(
        addNowPlayingMovies(d1),
      )
      
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;