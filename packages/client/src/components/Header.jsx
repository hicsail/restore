import { Box, Typography } from '@mui/material';

export function Header({ title, subtitle, imageUrl, bgColor }) {
  return (
    <Box height="500px" sx={{ display: 'flex', backgroundImage: `url(${imageUrl})`, bgcolor: bgColor || 'grey' }}>
      <Box width="67%" sx={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
        <Box height="80%" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Typography variant="headerTitle">{title}</Typography>
        </Box>
        <Box height="20%" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Typography variant="headerSubtitle">{subtitle}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
