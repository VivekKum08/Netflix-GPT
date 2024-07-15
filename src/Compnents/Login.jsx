import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

const [isSignINForm, setIsSignInForm] =useState(true);  

const toggleSignInForm= () =>{
  setIsSignInForm(!isSignINForm);
};

  return (
    <div>
      <Header/>
      <div className="absolute bg-black">
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
        alt="Background"
        />      
    </div>
    <form className="absolute w-3/12 p-12 bg-black bg-opacity-70 my-36 mx-auto right-0 left-0 text-white rounded">
      <h1 
      className="font-bold text-3xl py-3">
        {isSignINForm ? "Sign In": "Sign Up"}
      </h1>
      {!isSignINForm && (
        <input 
          type="text"
          placeholder="Full Name"
          className="bg-white bg-opacity-10 p-3 my-2 w-full rounded-lg border">
        </input>
      )}

      <input 
        type="text" 
        placeholder="E-mail or mobile number" 
        className="bg-white bg-opacity-10 p-3 my-2 w-full rounded-lg border"
      />

      <input 
        type="password" 
        placeholder="Password" 
        className="bg-white bg-opacity-10 p-3 my-2 w-full rounded-lg border" 
      />

      <button className="p-2 my-2 bg-red-700 w-full rounded-lg hover:bg-red-750">
        {isSignINForm ? "Sign In": "Sign Up"}
      </button> 

      {isSignINForm && (
           <div >
           <h1 className="... flex items-center justify-center p-1 my-1">
             OR
           </h1>
         </div>
      )}

      {isSignINForm && (   
        <button className="p-2 my-2 bg-white w-full rounded-lg bg-opacity-15 hover:bg-opacity-10">Use a sign-in code</button>  
      )}

      {isSignINForm &&(
        <div className="... flex items-center justify-center p-1 my-1 cursor-pointer hover:underline">
          <h1>
            Forgot Password?
          </h1>
        </div> 
      )}
  
      <div className="p-1 my-1">
        
      </div> 
      
      <div className="p-1 my-1 cursor-pointer hover:underline" onClick={toggleSignInForm}>
        <h1>
        {isSignINForm ? "New to Netflix? Sign Up Now": "Already Registered? Sign In Now"}
        </h1>
      </div>
      
      

    </form>
    </div>

  )
}

export default Login
