import { CardGrid } from '../components/CardGrid.jsx';

import { useQuery } from '@apollo/client';
import { GET_GETINVOLVED_CARDGRID } from '../gql.jsx';

function GetInvolvedCardGrid() {
  const { loading, error, data } = useQuery(GET_GETINVOLVED_CARDGRID);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <CardGrid cards={data.getInvolvedCardGrids.data} />;
}

export default function GetInvolved() {
  return (
    <>
      <GetInvolvedCardGrid />
    </>
  );
}
