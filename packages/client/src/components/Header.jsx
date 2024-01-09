import { Box, Typography } from '@mui/material';
import { theme } from '../theme.jsx';

export function Header({ title, subtitle, imageUrl, bgColor }) {
  return (
    <Box
      sx={{
        height: { xs: '300px', sm: '400px', md: '500px' }, // Responsive height
        display: 'flex',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        bgcolor: bgColor || 'grey',
        [theme.breakpoints.down('sm')]: {
          // Adjust styles for small screens
          flexDirection: 'column'
        }
      }}
    >
      <Box
        width={{ xs: '100%', sm: '80%', md: '67%' }} // Responsive width
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '1rem', sm: '1.5rem', md: '2rem' } // Responsive padding
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
        >
          <Typography
            variant="headerTitle"
            sx={{
              fontSize: {
                xs: '2rem',
                sm: '2rem',
                md: '3rem'
              }
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 0.3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}
        >
          <Typography variant="headerSubtitle">{subtitle}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
