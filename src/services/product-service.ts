import useServiceContext from '@/hooks/useServiceContext';

export function getProductQuery() {
  const { useQueryCall: userQuery } = useServiceContext().productService;

  const { call: getProduct, loading: productLoading } = userQuery({
    functionName: 'getProduct',
    refetchOnMount: false,
  });
  return { getProduct, productLoading };
}
