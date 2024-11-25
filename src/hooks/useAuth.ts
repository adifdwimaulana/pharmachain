import { AuthContext } from "@/contexts/auth-context";
import { useContext } from "react";

export default function useAuth() {
    return useContext(AuthContext);
}