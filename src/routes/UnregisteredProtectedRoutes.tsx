import useAuth from '@/hooks/useAuth';
import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function UnregisteredProtectedRoutes({ children }: { children?: ReactNode }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return user.isAuthorize === true ? (
    <Navigate to="/home" replace />
  ) : (
    children ?? <Outlet />
  );
}

export default UnregisteredProtectedRoutes;
