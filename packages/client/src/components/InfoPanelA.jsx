import { Box, Button, Typography } from '@mui/material';

// No idea what to name this. Layout 24 on wireframe.
export function InfoPanelA({ title, subtitle, imageUrl, iconUrl, buttonText }) {
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
        <Typography variant="infoPanelATitle">{title}</Typography>
        <Typography variant="infoPanelASubtitle">{subtitle}</Typography>
        {buttonText && (
          <Button variant="contained" sx={{ color: 'white', bgcolor: 'black' }}>
            {buttonText}
          </Button>
        )}
      </Box>
      <Box width="40%">
        <img width="100%" height="100%" src={imageUrl} />
      </Box>
    </Box>
  );
}
