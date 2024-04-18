import { Container, Typography } from '@mui/material';
import { Header } from '../components/Header.jsx';
import { SectionedHeader } from '../components/SectionedHeader.jsx';
import { CardGrid } from '../components/CardGrid.jsx';

import { useQuery } from '@apollo/client';
import { GET_GETINVOLVED_CARDGRID, GET_GETINVOLVEDPAGE_HEADER } from '../gql.jsx';

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
  const { data } = useQuery(GET_GETINVOLVEDPAGE_HEADER);
  if (!data?.getInvolvedPageHeader.data?.attributes.Header) return;
  const { Title, Subtitle, BackgroundColorHexCode, BackgroundImage } =
    data.getInvolvedPageHeader.data.attributes.Header;

  return (
    <Header
      title={Title}
      subtitle={Subtitle}
      imageUrl={BackgroundImage.data && BackgroundImage.data.attributes.url}
      bgColor={BackgroundColorHexCode}
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
