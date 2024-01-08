import { Container, Typography } from '@mui/material';
import { Header } from '../components/Header.jsx';
import { SectionedHeader } from '../components/SectionedHeader.jsx';
import { CardGrid } from '../components/CardGrid.jsx';

import { theme } from '../theme.jsx';

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

function GetInvolvedHeader() {
  return (
    <Header
      title="Multi-Level Interventions to Reduce the Burden of Trauma on the Health of Communities"
      subtitle="Improve Equitable Access. Promote Quality and Cultural Responsiveness of Care. Build Trust."
      bgColor={theme.palette.purple.dark}
    />
  );
}

export default function GetInvolved() {
  return (
    <>
      <GetInvolvedHeader />
      <Container sx={{ margin: '1rem auto' }}>
        <GetInvolvedCardGrid />
      </Container>
    </>
  );
}
