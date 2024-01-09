import { useQuery } from '@apollo/client';
import { Box, Container, Stack, Typography } from '@mui/material';

import { Header } from '../components/Header.jsx';
import { TeamCategory } from '../components/TeamCategory';

import { GET_TEAMPAGE_HEADER, GET_TEAM_CATEGORIES_AND_MEMBERS } from '../gql.jsx';
import { prependStrapiURL } from '../utils.jsx';

function TeamMemberGrid() {
  const { loading, error, data } = useQuery(GET_TEAM_CATEGORIES_AND_MEMBERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Stack spacing={10}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography>
          At our hospital, we have assembled a team of highly skilled and compassionate professionals who are dedicated
          to providing exceptional psychiatric services. With years of experience and a deep understanding of mental
          health, our team is committed to helping patients on their journey to wellness.
        </Typography>
      </Box>
      {data.teamCategories.data
        .filter((category) => category.attributes.Order || 0)
        .sort((a, b) => a.attributes.Order - b.attributes.Order)
        .map((category) => (
          <TeamCategory key={category} {...category.attributes} />
        ))}
    </Stack>
  );
}

function TeamHeader() {
  const { data } = useQuery(GET_TEAMPAGE_HEADER);
  if (!data?.teamPageHeader.data?.attributes.Header) return;
  const { Title, Subtitle, BackgroundColorHexCode, BackgroundImage } = data.teamPageHeader.data.attributes.Header;

  return (
    <Header
      title={Title}
      subtitle={Subtitle}
      imageUrl={BackgroundImage.data && prependStrapiURL(BackgroundImage.data.attributes.url)}
      bgColor={BackgroundColorHexCode}
    />
  );
}

export default function Team() {
  return (
    <>
      <TeamHeader />
      <Container sx={{ margin: '1rem auto' }}>
        <TeamMemberGrid />
      </Container>
    </>
  );
}
