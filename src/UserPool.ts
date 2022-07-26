import { CognitoUserPool, ICognitoUserPoolData } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: process.env.REACT_APP_USER_POOL,
    ClientId: process.env.REACT_APP_CLIENT_ID,
};

export default new CognitoUserPool(poolData as ICognitoUserPoolData);