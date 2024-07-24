import { useState, useRef } from 'react'
// import { useNavigate } from 'react-router-dom';
import Header from './Header'
import { checkValidateLogin} from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { UserAvatar } from '../utils/constants';
// import { useDispatch } from 'react-redux';

const Login = () => {
// const navigate = useNavigate();
// const dispatch = useDispatch();
const [isSignINForm, setIsSignInForm] = useState(true);  
const [errorMessage, setErrorMessage] = useState(null);


const email = useRef(null);
const password = useRef(null);
const name = useRef(null);

const  handleButtonClick = () =>{
  //validate the form data
  // checkvalidData()
  // console.log(name.current.value);
  // console.log(email.current.value +" "+password.current.value);
 
  const message = checkValidateLogin(email.current.value,password.current.value);
  
  
  // console.log(message);
  setErrorMessage(message);

  if(message) return;

  if(!isSignINForm) {

  // Sign Up Logic 
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: UserAvatar
    }).then(() => {
      // Profile updated!
      // ...
      const { uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(
      addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
      })
      );
      // navigate("/browse")
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message);
    });

    // console.log(user);
    // navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" +errorMessage);
  });

  }
  else
  { //Sign In Logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user);
      // navigate("/browse")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+ "-" +errorMessage);
    });
  }

  
}


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
    <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-black bg-opacity-70 my-36 mx-auto right-0 left-0 text-white rounded">
      <h1 
      className="font-bold text-3xl py-3">
        {isSignINForm ? "Sign In": "Sign Up"}
      </h1>
      {!isSignINForm && (
        <input 
        ref={name}
          type="text"
          placeholder="Full Name"
          className="bg-white bg-opacity-10 p-3 my-2 w-full rounded-lg border"
        />
      )}

      <input 
      ref={email}
        type="text" 
        placeholder="E-mail" 
        className="bg-white bg-opacity-10 p-3 my-2 w-full rounded-lg border"
      />

      <input 
      ref={password}
        type="password" 
        placeholder="Password" 
        className="bg-white bg-opacity-10 p-3 my-2 w-full rounded-lg border" 
      />

      <p className="text-red-500">{errorMessage}</p>

      <button className="p-2 my-2 bg-red-700 w-full rounded-lg hover:bg-red-800" onClick={handleButtonClick}>
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

      <div className="p-1 my-1 cursor-pointer " onClick={toggleSignInForm}>
        <h1>
        {isSignINForm ? <div>New to Netflix? <span className='hover:underline'>Sign Up Now</span></div>:<div>Already Registered? <span className='hover:underline'>Sign In Now</span></div>}
        </h1>
      </div>
      
      

    </form>
    </div>

  )
}

export default Login
