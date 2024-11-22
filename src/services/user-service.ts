import useServiceContext from '@/hooks/useServiceContext';

export function getUserQuery() {
  const { useQueryCall: userQuery } = useServiceContext().userService;

  const { call: getUser, loading: userLoading } = userQuery({
    functionName: 'getUser',
    refetchOnMount: false,
  });
  return { getUser, userLoading };
}
