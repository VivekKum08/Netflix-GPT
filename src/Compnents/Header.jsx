import React from 'react'
// import Login from './Login';
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {addUser, removeUser} from '../utils/userSlice';
import { Logo} from '../utils/constants';
import {addNowPlayingMovies} from '../utils/moviesSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  const movies=useSelector((store)=>store.movies);

  // console.log(movies)

  const handleSignOut =() => {
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        const {nowPlayingMovies}=movies;
        dispatch(
          addUser({ 
            uid:uid,
               email:email,
                displayName:displayName,
                 photoURL:photoURL
        })
        ,
        addNowPlayingMovies(nowPlayingMovies)
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribed when unauthstatechange call back
    return () => unsubscribe();
  },[]); 

  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img 
      className="w-44 "
      src= {Logo}
      alt="Logo"
      />
      {user && (
        <div className=' py-4 space-x-2 flex'>
        <img 
        className='w-8 h-8'
        src={user?.photoURL} 
        alt="usericon"
        />
        <button onClick={handleSignOut} className='font-bold text-white p-2 my-2 bg-black w-full rounded-lg'>Sign Out</button>
      </div>
      )}
      
    </div>
    // 
  )
}

export default Header
