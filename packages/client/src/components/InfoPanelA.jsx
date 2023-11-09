import { NavLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

// No idea what to name this. Layout 24 on wireframe.
export function InfoPanelA({ title, subtitle, imageUrl, imageAlt, iconUrl, iconAlt, buttonText, buttonLink }) {
  return (
    <Box sx={{ display: 'flex', margin: '2rem auto' }}>
      <Box
        width="60%"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '2rem'
        }}
      >
        {iconUrl && <img width="30 em" height="30 em" src={iconUrl} alt={iconAlt} />}
        <Typography variant="infoPanelATitle">{title}</Typography>
        <Typography variant="infoPanelASubtitle">{subtitle}</Typography>
        {buttonText && (
          <Button component={NavLink} to={buttonLink} variant="contained" sx={{ color: 'white', bgcolor: 'black' }}>
            {buttonText}
          </Button>
        )}
      </Box>
      <Box width="40%">{imageUrl && <img width="100%" height="100%" src={imageUrl} alt={imageAlt} />}</Box>
    </Box>
  );
}
