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
    <form onSubmit={onSignup}>
      UserName:
      <input
        type="text"
        value={username.toLowerCase().trim()}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      Name:
      <input
        type="text"
        value={name.toLowerCase().trim()}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email:
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      Password:
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Register</button>
    </form>)

    const verificationForm = (
      <form onSubmit={onVerify}>
      Enter the OTP:
      <input
        type="text"
        value={OTP}
        onChange={(e) => setOTP(e.target.value)}
      />
      <br />
      <button type="submit">Verify</button>
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