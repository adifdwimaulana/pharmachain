import useServiceContext from '@/hooks/useServiceContext';

export function getUserQuery() {
  const { useQueryCall: userQuery } = useServiceContext().userService;

  const { call: getUser, loading: userLoading } = userQuery({
    functionName: 'getUser',
    refetchOnMount: false,
  });
  return { getUser, userLoading };
}

export function updateUserQuery() {
  const { useUpdateCall: userUpdate } = useServiceContext().userService;

  const { call: updateUser, loading } = userUpdate({
    functionName: 'updateUser',
  });

  return { updateUser };
}

export function registerQuery() {
  const { useUpdateCall: userRegister } = useServiceContext().userService;

  const { call: createUser } = userRegister({
    functionName: 'register',
  });

  return { createUser };
}
