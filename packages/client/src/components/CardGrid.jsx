import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
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
function CardGridCard({ Index, Icon, Title, Text, Link }) {
  const imgUrl = Icon.data && import.meta.env.VITE_STRAPI_URL + Icon.data.attributes.url;
  const imgAlt = Icon.data && Icon.data.attributes.alternativeText;
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex', //so that action area stretches over whole card
        border: 1,
        borderRadius: '0 20px 20px 20px'
      }}
    >
      <CardActionArea disabled={!Link} component={NavLink} to={Link}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          {imgUrl && <img width="30 em" height="30 em" src={imgUrl} alt={imgAlt} />}
          <Typography variant="cardGridCardTitle">{Title}</Typography>
          <Typography variant="cardGridCardText">
            <ReactMarkdown>{Text}</ReactMarkdown>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
