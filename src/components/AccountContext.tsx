import { AuthenticationDetails, CognitoUser , CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';
import UserPool from '../UserPool';

interface IAuthContext {
    authenticate?: any,
    getSession?: any, 
    logout?: any,
    signUp?: any,
    confirmRegistration?: any
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

  const authenticate = async (Username: string, Password: string) => {
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

  const signUp = async (userName: string, password: string, email:string, name:string) => {
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
    UserPool.signUp(userName, password, attributeList, [] as CognitoUserAttribute[], (err, data) => {
      if (err) {
        alert(`Couldn't sign up ${err.message}`);
      }
    });
  };

  const confirmRegistration = (userName: string, OTP: string) => {
    const user = new CognitoUser({
      Username: userName,
      Pool: UserPool,
    });
    user.confirmRegistration(OTP, true, (err, data) => {
      if (err) {
        alert("Couldn't verify account");
      } else {
        alert('Account verified successfully');
      }
    });
  }

  const logout = () => {
    const user = UserPool.getCurrentUser();
    user?.signOut();
    window.location.href = '/';
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout, signUp , confirmRegistration }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };