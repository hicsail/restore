import { useLazyQuery } from '@apollo/client';
import { GET_PAGE } from '../gql.jsx';
import { useNav } from '../context/navigation.context.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Stack } from '@mui/material';
import { WebComponents } from '../components/WebComponents.jsx';

export const StrapiPage = () => {
  const { getPageId, init } = useNav();
  const { pathname } = useLocation();
  const [getPageInfo, { data, loading, error }] = useLazyQuery(GET_PAGE, {
    fetchPolicy: 'cache-and-network'
  });

  useEffect(() => {
    const pageId = getPageId(pathname);
    if (pageId) {
      getPageInfo({
        variables: { id: pageId }
      });
    }
  }, [init]);

  if (!data?.page.data.attributes.content) {
    return 'Loading...';
  }

  return (
    <Stack spacing={3} display="flex">
      {data.page.data.attributes.content.map((block, index) => (
        <WebComponents key={index} type={block.__typename} data={block} />
      ))}
    </Stack>
  );
};
