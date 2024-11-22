import { createContext, useEffect, useMemo, useState } from 'react';
import { createReactor, useAgentManager } from '@ic-reactor/react';
import {
  ActorSubclass,
  CreateReactorReturnType,
} from '@ic-reactor/react/dist/types';

import { _SERVICE as _SERVICE_PRODUCT } from '@/declarations/product/product.did';
import { _SERVICE as _SERVICE_USER } from '@/declarations/user/user.did';
import {
  canisterId as userCanisterId,
  idlFactory as userIdlFactory,
  user,
} from '@/declarations/user';
import {
  canisterId as productCanisterId,
  idlFactory as productIdlFactory,
  product,
} from '@/declarations/product';

interface Props {
  children: React.ReactNode;
}

interface ServiceType {
  userService: CreateReactorReturnType<ActorSubclass<_SERVICE_USER>>;
  productService: CreateReactorReturnType<ActorSubclass<_SERVICE_PRODUCT>>;

  userCanisterId: string;
  productCanisterId: string;
}

const ServiceContext = createContext<ServiceType | null>(null);

const ServiceContextProvider: React.FC<Props> = ({ children }) => {
  const agentManager = useAgentManager();

  const userService = useMemo(
    () =>
      createReactor<typeof user>({
        canisterId: userCanisterId,
        idlFactory: userIdlFactory,
        agentManager,
      }),
    [agentManager],
  );

  const productService = useMemo(
    () =>
      createReactor<typeof product>({
        canisterId: productCanisterId,
        idlFactory: productIdlFactory,
        agentManager,
      }),
    [agentManager],
  );

  return (
    <ServiceContext.Provider
      value={{
        userService,
        productService,
        userCanisterId,
        productCanisterId,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceContextProvider };
