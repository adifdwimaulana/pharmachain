import LandingPage from '@/pages/landing-page';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login-page';
import UnprotectedRoutes from './routes/UnprotectedRoutes';
import ProtectedRoute from './routes/ProtectedRoutes';
import HomePage from './pages/home';

function App() {

  const router = createBrowserRouter (
    createRoutesFromElements([
      <Route key="/" path="/" element={<UnprotectedRoutes><LandingPage /></UnprotectedRoutes>} />,
      <Route key="login" path="/login" element={<UnprotectedRoutes><LoginPage /></UnprotectedRoutes>} />,
      
      <Route key="home" path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />,
    ])
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
