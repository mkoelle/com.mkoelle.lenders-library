import { useContext, useState } from 'react';
import { AccountContext } from '../AccountContext';
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<{code :string, name: string}|undefined>(undefined);

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    authenticate(username, password)
    .then(() => {
      setAuthError(undefined)
      navigate('/')
    })
    .catch((err: {code :string, name: string}) => {
      setAuthError(err)
    });
  };
  let error
  if (authError){
    let message =  "Login failed, please check your username or password"
    if(authError?.code !== "UserNotFoundException" &&
      authError?.code !== "NotAuthorizedException") message = JSON.stringify(authError)
    error = (
      <div className='notification is-danger m-3'>
        {message}
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="box page">
      <h1 className="title has-text-centered is-size-2">Login</h1>
      <figure className="image container is-64x64">
        <img src="img/placeholder.png" alt='Lenders Library Logo' />
      </figure>
      <div className="field">
        <label className="label">User Name:</label>
        <p className="control has-icons-left has-icons-right">
        <input
            className="input" 
            type="text" 
            value={username}
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
      <button type="submit" className="button is-rounded is-outlined is-medium">Login</button>
      {error}
    </form>
  );
}

export default Login;