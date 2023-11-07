import { Box, Typography } from '@mui/material';
import { theme } from '../theme.jsx';

// Turns out we want the same header across pages...
export function UniversalHeader() {
  return (
    <Header
      title="Multi-level interventions to reduce the burden of trauma on the health of communities"
      subtitle="Improve Equitable Access. Promote Quality and Cultural Responsiveness. Build Trust."
      bgColor={theme.palette.purple.dark}
    />
  );
}

// ...Still, will keep Header function for future flexibility.
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
