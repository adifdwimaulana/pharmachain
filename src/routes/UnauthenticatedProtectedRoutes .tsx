import useAuth from '@/hooks/useAuth';
import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function UnprotectedRoutes({ children }: { children?: ReactNode }) {
  const { user } = useAuth();

  return user ? <Navigate to="/home" replace /> : children ?? <Outlet />;
}

export default UnprotectedRoutes;
