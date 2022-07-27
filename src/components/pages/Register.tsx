import { useState,useContext } from 'react';
import { AccountContext } from '../AccountContext';






function Register() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [OTP, setOTP] = useState('');
  const { signUp, confirmRegistration } = useContext(AccountContext);

  const onSignup = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    signUp(username,password,email,name)
    setIsVerifying(true)
  };

  const onVerify = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    confirmRegistration(username,OTP)
    setIsVerifying(false)
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
            className="input" 
            type="email" 
            value={email.toLowerCase().trim()}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
        </span>
        </p>
      </div>

      <div className="field">
        <label className="label">Name:</label>
        <p className="control has-icons-left has-icons-right">
        <input
            className="input" 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        <span className="icon is-small is-left">
        <i className="fas fa-user-astronaut"></i>
        </span>
        </p>
      </div>

      <div className="field">
        <label className="label">User Name:</label>
        <p className="control has-icons-left has-icons-right">
        <input
            className="input" 
            type="text" 
            value={username.toLowerCase().trim()}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
          />
        <span className="icon is-small is-left">
        <i className="fas fa-dragon"></i>
        </span>
        </p>
      </div>

      <div className="field">
        <label className="label">Password:</label>
        <p className="control has-icons-left">
          <input
              className="input" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
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