import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AccountContext } from '../AccountContext';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

function Register() {
  const [username, setUsername] = useState('');
  const [usernameTouched, setUsernameTouched] = useState(false);
  const usernameValid = username.trim().length >= 1
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const nameValid = name.trim().length >= 1
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const emailValid = emailRegex.test(email.trim())
  const[password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const passwordValid = passwordRegex.test(password.trim())
  const [isVerifying, setIsVerifying] = useState(false);
  const [OTP, setOTP] = useState('');
  const { signUp, confirmRegistration } = useContext(AccountContext);
  const navigate = useNavigate()

  const onSignup = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setEmailTouched(true)
    setNameTouched(true)
    setPasswordTouched(true)
    setUsernameTouched(true)
    if(!emailValid || !usernameValid || !passwordValid || !nameValid) return
    signUp(username,password,email,name)
    .catch((err: any) => {
      console.log(err)
      return
    })
    setIsVerifying(true)
  };

  const onVerify = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    confirmRegistration(username,OTP)
    navigate("/Login")
  };

  const signupForm = (
    <form onSubmit={onSignup} className="box page">

      <h1 className="title has-text-centered is-size-2">Registration</h1>
      <figure className="image container is-64x64">
        <img src="img/placeholder.png" alt='Lenders Library Logo' />
      </figure>

      <div className="field">
        <label className="label">Email:</label>
        <p className="control has-icons-left has-icons-right">
        <input
            className={`input ${!emailValid && emailTouched && "is-danger"}`} 
            type="text" 
            value={email.toLowerCase().trim()}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={()=>setEmailTouched(true)}
            placeholder="Email"
          />
        <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
        </span>
        </p>
        {!emailValid && emailTouched && <p className='help'>please provide a valid email.</p>}
      </div>

      <div className="field">
        <label className="label">Name:</label>
        <p className="control has-icons-left has-icons-right">
        <input
            className={`input ${!nameValid && nameTouched && "is-danger"}`}
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={()=>setNameTouched(true)}
            placeholder="Name"
          />
        <span className="icon is-small is-left">
        <i className="fas fa-user-astronaut"></i>
        </span>
        </p>
        {!nameValid && nameTouched && <p className='help'>please provide a name.</p>}
      </div>

      <div className="field">
        <label className="label">User Name:</label>
        <p className="control has-icons-left has-icons-right">
        <input
            className={`input ${!usernameValid && usernameTouched && "is-danger"}`}
            type="text" 
            value={username.toLowerCase().trim()}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={()=>setUsernameTouched(true)}
            placeholder="User Name"
          />
        <span className="icon is-small is-left">
        <i className="fas fa-dragon"></i>
        </span>
        </p>
        {!usernameValid && usernameTouched && <p className='help'>please provide a user name.</p>}
      </div>

      <div className="field">
        <label className="label">Password:</label>
        <p className="control has-icons-left">
          <input
              className={`input ${!passwordValid && passwordTouched && "is-danger"}`}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordTouched(true)}
              placeholder="Password"
            />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
        <p className='help'>Password must be of 8 characters minimum, contain both upper and lowercase characters, and at least one digit and special character</p>
      </div>

      <button type="submit" className="button is-rounded is-outlined is-medium">Register</button>
    </form>)

    const verificationForm = (
    <form onSubmit={onVerify} className="box page">
      <h1 className="title has-text-centered is-size-2">Verification</h1>
      <figure className="image container is-64x64">
        <img src="img/placeholder.png" alt='Lenders Library Logo' />
      </figure>
      <p className='has-text-centered m-5'>
        To complete registration please provide the token that has been emailed to you.
      </p>
      <div className="field">
        <label className="label">One time Password:</label>
        <p className="control has-icons-left">
          <input
              className="input" 
              type="text"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              placeholder="OTP"
            />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <button type="submit" className="button is-rounded is-outlined is-medium">Verify</button>
    </form>
    )

  return (
    <div>
        {isVerifying === false ? 
        (signupForm) :
        (verificationForm )}
    </div>
  );
}

export default Register;