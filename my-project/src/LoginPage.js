import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  return (
    <div>
      <h1>Đăng nhập</h1>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          // Xử lý token ở đây
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
};

export default LoginPage;
