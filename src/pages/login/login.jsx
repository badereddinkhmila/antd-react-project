import { Card } from 'antd';
import React from 'react';
import SignInForm from 'src/components/sign-in/signIn';


const Login = () => {
  return (
  <div className='login-container'>
    <Card title="Login to your account"
          style={{ margin: 'auto', maxWidth: 500, maxHeight: 400 }}
    > 
      <SignInForm/>
      </Card>
  </div>);
};

export default Login;
