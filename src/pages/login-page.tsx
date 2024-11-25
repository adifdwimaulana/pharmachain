import useAuth from '@/hooks/useAuth'
import React from 'react'

const LoginPage = () => {
    const { login } = useAuth()
    return (
      <div onClick={login}>Login</div>
    );
  };
  
  export default LoginPage;