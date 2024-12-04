import useAuth from '@/hooks/useAuth';

const LoginPage = () => {
  const { login } = useAuth();
  return <div onClick={login}>Login</div>;
};

export default LoginPage;
