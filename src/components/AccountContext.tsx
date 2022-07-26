import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';
import UserPool from '../UserPool';

interface IAuthContext {
    authenticate?: any,
    getSession?: any, 
    logout?: any
  }

const AccountContext = createContext<IAuthContext>({});

const Account = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  const getSession = async () => {
    await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession((err: any, session: unknown) => {
          if (err) {
            reject(err);
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  const authenticate = async (Username: any, Password: any) => {
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool: UserPool,
      });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (result) => {
          resolve(result);
        },
        onFailure: (err) => {
          alert(`Couldn't login ${err.message}`);
          reject(err);
        },
        newPasswordRequired: (data) => {
          alert(`new password required: ${data}`);
          resolve(data);
        },
      });
    });
  };

  const logout = () => {
    const user = UserPool.getCurrentUser();
    user?.signOut();
    window.location.href = '/';
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };