import LandingPage from '@/pages/landing-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page';
import CompleteRegistrationPage from './pages/complete-registration-page';
import UnauthenticatedProtectedRoutes from './routes/UnauthenticatedProtectedRoutes ';
import UnregisteredProtectedRoutes from './routes/UnregisteredProtectedRoutes';
import AuthorizedProtectedRoutes from './routes/AuthorizedProtectedRoutes';
import HomePage from './pages/home';

function App() {
  interface RouterProtector {
    element: JSX.Element;
    children?: { path: string; element: JSX.Element }[];
  }

  const guestRoutes = [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ];

  const unregisteredProtectedRoutes = [
    {
      path: '/complete-registration',
      element: <CompleteRegistrationPage />,
    },
  ];

  const authorizedProtectedRoutes = [
    {
      path: '/home',
      element: <HomePage />,
    },
  ];

  const protector: RouterProtector[] = [
    {
      element: <UnauthenticatedProtectedRoutes />,
      children: guestRoutes,
    },
    {
      element: <UnregisteredProtectedRoutes />,
      children: unregisteredProtectedRoutes,
    },
    {
      element: <AuthorizedProtectedRoutes />,
      children: authorizedProtectedRoutes,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {protector.map((route, index) => (
          <Route key={index} element={route.element}>
            {route.children?.map((childRoute, childIndex) => (
              <Route
                key={childRoute.path}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
