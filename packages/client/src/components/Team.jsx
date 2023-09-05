import { useQuery } from '@apollo/client';
import { Box, Card, Typography } from '@mui/material';

import { GET_TEAM_MEMBERS } from '../gql.jsx'

export default function TeamMemberGrid() {
  return <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}><TeamMemberCards /></Box>
}

function TeamMemberCards() {
  const { loading, error, data } = useQuery(GET_TEAM_MEMBERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.teamMembers.data.map(({ id, attributes }) => (
    <Card key={id} className="teamMemberCard" sx={{ backgroundColor: 'blue.main', padding: '1rem', textAlign: 'center' }}>
      <img src={import.meta.env.VITE_STRAPI_URL + attributes.Photo.data.attributes.url} />
      <Typography variant="h5">{attributes.Name}</Typography>
      <Typography>{attributes.Titles}</Typography>
      <Typography>{attributes.Roles}</Typography>
      <Typography>{attributes.Languages}</Typography>
    </Card>
  ));
}
