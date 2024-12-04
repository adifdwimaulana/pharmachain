import useAuth from '@/hooks/useAuth';
import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function AuthorizedProtectedRoutes({ children }: { children?: ReactNode }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return user.isAuthorize === true ? (
    children ?? <Outlet />
  ) : (
    <Navigate to="/complete-registration" replace />
  );
}

export default AuthorizedProtectedRoutes;
