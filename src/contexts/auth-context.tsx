import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { canisterId as internetIdentityCanisterId } from "../declarations/internet_identity";
import { getUserQuery, registerQuery } from "@/services/user-service";
import { User__1 } from "@/declarations/user/user.did";
import useServiceContext from "@/hooks/useServiceContext";

interface Props {
    children: ReactNode;
}

export type AuthContextType = {
    user: User__1 | undefined | null;
    getPrincipal: () => Promise<any>;
    login: () => Promise<any>;
    logout: () => Promise<any>;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    getPrincipal: null!,
    login: null!,
    logout: null!
});

export default function AuthContextProvider({ children }: Props) {
    const { getUser, userLoading } = getUserQuery();
    const { createUser } = registerQuery();
    const { authenticating } = useServiceContext()
    const [user, setUser] = useState<User__1 | undefined | null>();

    const fetchUser = async () => {
        const authClient = await AuthClient.create();
        const identity = authClient.getIdentity();
        const principal = identity.getPrincipal().toText();

        // Ignore anonymous principal
        if (principal === "2vxsx-fae") {
            console.log("ANONYMOUS")
            setUser(null);
            return;
        }
    
        // Fetch user data
        const userData = await getUser([identity.getPrincipal()]);
        console.log(userData)
        if (userData && userData.length > 0) {
            setUser(userData[0]);
            return;
        }
    
        // Create a new user if none exists but already got user principal from internet identity
        const newUser = await createUser(["", ""]);
        if (!newUser || 'err' in newUser) {
            setUser(null);
            return;
        }
        setUser(newUser.ok);
        return;
    };
    

    const login = async () => {
        const authClient = await AuthClient.create();
        try {
            await new Promise<void>((resolve, reject) => {
                authClient.login({
                    identityProvider: `http://${internetIdentityCanisterId}.localhost:4943/`,
                    onSuccess: () => {
                        resolve();
                        window.location.reload();
                        fetchUser()
                    },
                    onError: reject,
                });
            });
            console.log("Login successful: ", authClient.getIdentity());
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const logout = async () => {
        const authClient = await AuthClient.create();
        await authClient.logout();
        setUser(null);
        window.location.reload();
    };

    const getPrincipal = useCallback(async () => {
        const authClient = await AuthClient.create();
        return authClient.getIdentity().getPrincipal();
    }, []);    


    useEffect(() => {
        if (user == undefined && user == null && !authenticating && !userLoading) {
            fetchUser()
        }
    }, [authenticating]);

    return (
        <AuthContext.Provider value={{
            user,
            getPrincipal,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
