import {/* useEffect,*/ useRef, useState } from 'react'
import './register.scss'

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () =>{
    setEmail(emailRef.current.value)
  };
  const handleFinish = () =>{
    setPassword(passwordRef.current.value)
  };

  
  //NOT USING THE USE-EFFECT YET SINCE THE CODE WORKS LIKE THAT
  /*useEffect(() => {
    // Check if email is not empty
    if (email) {
        setEmail(email);
      // Perform any side effects or actions related to the email
      console.log('Email state changed:', email);
  
      // Change the state to password, you can perform other actions here
      setPassword(password);
    }
  }, [email, password]);*/
  

  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="/assets/netRegister.png" alt="" />
                <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, Tv shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {
                !email ?
                (
                    <div className="input">
                        <input type="email" placeholder='email address' ref={emailRef}/>
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </div>
                )
                :
                (<form className="input">
                    <input type="password" placeholder='password' ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </form>)
            }
            
        </div>
    </div>
  )
}
