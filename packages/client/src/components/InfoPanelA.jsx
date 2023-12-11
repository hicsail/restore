import { NavLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

// No idea what to name this. Layout 24 on wireframe.
export function InfoPanelA({ title, subtitle, imageUrl, imageAlt, iconUrl, iconAlt, buttonText, buttonLink }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        margin: '2rem auto',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '60%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          padding: '2rem',
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        {iconUrl && <img width="30 em" height="30 em" src={iconUrl} alt={iconAlt} />}
        <Typography variant="infoPanelATitle">{title}</Typography>
        <Typography variant="infoPanelASubtitle">{subtitle}</Typography>
        {buttonText && (
          <Button
            component={NavLink}
            to={buttonLink}
            variant="contained"
            sx={{ color: 'white', bgcolor: 'black', mt: 2 }}
          >
            {buttonText}
          </Button>
        )}
      </Box>
      <Box
        sx={{
          width: {
            xs: '60%',
            md: '40%'
          }
        }}
      >
        {imageUrl && <img style={{ width: '100%', height: 'auto' }} src={imageUrl} alt={imageAlt} />}
      </Box>
    </Box>
  );
}
