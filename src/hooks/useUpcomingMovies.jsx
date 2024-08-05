import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies =() => {
    const dispatch =useDispatch();

    const getUpcomingMovies = async ()=> {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
      API_Options
      );
      const movies = await data.json();
      const d1=movies.results;
      dispatch(
        addUpcomingMovies(d1),
      )
      
    };
  
    useEffect(() => {
      getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;

