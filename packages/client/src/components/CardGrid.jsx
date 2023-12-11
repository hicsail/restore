import { Box, Card, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

export function CardGrid({ cards }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 2
      }}
    >
      {cards
        .filter(() => true)
        .sort((a, b) => a.attributes.CardGridCardData.Index - b.attributes.CardGridCardData.Index)
        .map((a) => (
          <CardGridCard key={a.attributes.CardGridCardData.id} {...a.attributes.CardGridCardData} />
        ))}
    </Box>
  );
}
function CardGridCard({ Index, Icon, Title, Text }) {
  const imgUrl = import.meta.env.VITE_STRAPI_URL + Icon.data.attributes.url;
  const imgAlt = Icon.data.attributes.alternativeText;
  return (
    <Card
      variant="outlined"
      sx={{ border: 1, borderRadius: '0 20px 20px 20px', display: 'flex', flexDirection: 'column', padding: 2 }}
    >
      <img width="30 em" height="30 em" src={imgUrl} alt={imgAlt} />
      <Typography variant="cardGridCardTitle">{Title}</Typography>
      <Typography variant="cardGridCardText">
        <ReactMarkdown>{Text}</ReactMarkdown>
      </Typography>
    </Card>
  );
}
