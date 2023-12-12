import { Typography } from '@mui/material';
import { SectionedHeader } from '../components/SectionedHeader.jsx';
import { CardGrid } from '../components/CardGrid.jsx';

import { useQuery } from '@apollo/client';
import { GET_GETINVOLVED_CARDGRID } from '../gql.jsx';

function GetInvolvedCardGrid() {
  const { loading, error, data } = useQuery(GET_GETINVOLVED_CARDGRID);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <SectionedHeader title="Get Involved" />
      <Typography variant="h5" sx={{ margin: '1rem 0' }}>
        Contact us at restore@bmc.org if you would like to get involved or to learn more.
      </Typography>
      <CardGrid cards={data.getInvolvedCardGrids.data} />
    </>
  );
}

export default function GetInvolved() {
  return (
    <>
      <GetInvolvedCardGrid />
    </>
  );
}
