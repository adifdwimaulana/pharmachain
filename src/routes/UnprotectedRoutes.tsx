import useAuth from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

const UnprotectedRoutes: React.FC<Props> = ({ children }) => {
    const { user } = useAuth();
    
    return user ? <Navigate to="/home" replace /> : children;
};

export default UnprotectedRoutes;