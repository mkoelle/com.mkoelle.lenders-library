import { useContext, useState } from 'react';
import { AccountContext } from '../AccountContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    authenticate(username, password)
    .then((data: any) => {
      window.location.reload();
    })
    .catch((err: any) => {
      alert(`login failure ${err.message}`);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        UserName:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;