import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
    const { user } = useAuth();

    return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;