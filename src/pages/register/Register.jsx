import './register.scss'

export default function Register() {
  return (
    <div className='register'>
        <div className="top">
            <img className='logo' src="/assets/netRegister.png" alt="" />
            <button className="loginbutton">Sign In</button>
        </div>
        <div className="container">
            <h1>Unlimited movies, Tv shiws and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="input">
                <input type="email" placeholder='email address'/>
                <button className="registerButon">Get Started</button>
            </div>
        </div>
    </div>
  )
}
