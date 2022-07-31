import { useContext, useRef, useState } from 'react';
import { AccountContext } from '../AccountContext';
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const username = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const [authError, setAuthError] = useState<{code :string, name: string}|undefined>(undefined);

  const { authenticate } = useContext(AccountContext);

  const onSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    await authenticate(username.current?.value, password.current?.value)
    .then((data:any) => {
      setAuthError(undefined)
      navigate('/')
    })
    .catch((err: any) => {
      setAuthError(err)
      console.log(err)
    });
  };
  let error
  if (authError){
    console.log(authError)
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
            ref={username}
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
              ref={password}
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