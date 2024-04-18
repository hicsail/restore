import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export function WebCardGrid({ cards }) {
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
      {cards.map((card, index) => (
        <CardGridCard key={index} {...card} />
      ))}
    </Box>
  );
}
function CardGridCard({ Index, Icon, Title, Text, Link, LinkText }) {
  const imgUrl = Icon.data && import.meta.env.VITE_STRAPI_URL + Icon.data.attributes.url;
  const imgAlt = Icon.data && Icon.data.attributes.alternativeText;
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: 1,
        borderRadius: '0 20px 20px 20px'
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {imgUrl && <img width="30 em" height="30 em" src={imgUrl} alt={imgAlt} />}
        <Typography variant="cardGridCardTitle">{Title}</Typography>
        <Typography variant="cardGridCardText">
          <ReactMarkdown>{Text}</ReactMarkdown>
        </Typography>
      </CardContent>
      {Link && (
        <CardActions>
          <Button
            component={NavLink}
            to={Link}
            variant="contained"
            color="primary"
            target={Link.startsWith('http') ? '_blank' : null}
          >
            {LinkText}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
