import { Link } from 'react-router-dom';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { generateBlogPostPath, prependStrapiURL } from '../utils';

export function BlogCard({ id, tag, title, description, imgSource, author, date }) {
  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: 380, border: 0, borderRadius: 0 }}
    >
      <CardActionArea component={Link} to={generateBlogPostPath(id, title)} sx={{ padding: 2, marginBottom: 'auto' }}>
        <CardMedia
          component="img"
          height={220}
          image={imgSource ? prependStrapiURL(imgSource) : '/src/assets/imgplaceholder.png'}
          sx={{ borderRadius: 4 }}
        />
        <CardContent sx={{ px: 0 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }} gutterBottom>
            {tag}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }} gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: 2 }}>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {author}
          </Typography>
          <Typography variant="body2">{new Date(date).toDateString()}</Typography>
        </Box>
      </CardActions>
    </Card>
  );
}
