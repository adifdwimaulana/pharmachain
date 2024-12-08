import { createContext, useEffect, useMemo, useState } from 'react';
import { createReactor, useAgentManager } from '@ic-reactor/react';
import {
  ActorSubclass,
  CreateReactorReturnType,
} from '@ic-reactor/react/dist/types';

import { _SERVICE as _SERVICE_USER } from '@/declarations/user/user.did';
import {
  canisterId as userCanisterId,
  idlFactory as userIdlFactory,
  user,
} from '@/declarations/user';

interface Props {
  children: React.ReactNode;
}

interface ServiceType {
  userService: CreateReactorReturnType<ActorSubclass<_SERVICE_USER>>;
  userCanisterId: string;
  authenticating: boolean;
}

const ServiceContext = createContext<ServiceType | null>(null);

const ServiceContextProvider: React.FC<Props> = ({ children }) => {
  const agentManager = useAgentManager();
  const [authenticating, setAuthenticating] = useState(true);

  useEffect(() => {
    const unsubscribe = agentManager.subscribeAuthState((authState) => {
      if (authState.authenticating) {
        setAuthenticating(true);
      } else {
        setAuthenticating(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [agentManager]);

  const userService = useMemo(
    () =>
      createReactor<typeof user>({
        canisterId: userCanisterId,
        idlFactory: userIdlFactory,
        agentManager,
      }),
    [agentManager],
  );

  return (
    <ServiceContext.Provider
      value={{
        userService,
        userCanisterId,
        authenticating,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceContextProvider };
