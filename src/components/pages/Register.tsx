import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useState } from 'react';
import UserPool from '../../UserPool';

function Register() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      }),
      new CognitoUserAttribute({
        Name: 'name',
        Value: name,
      }),
    );
    UserPool.signUp(username, password, attributeList, [] as CognitoUserAttribute[], (err, data) => {
      if (err) {
        console.log(err);
        alert("Couldn't sign up");
      } else {
        console.log(data);
        alert('User Added Successfully');
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
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
      </form>
    </div>
  );
}

export default Register;