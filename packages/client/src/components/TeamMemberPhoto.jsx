import { Avatar, Box } from '@mui/material';
import { prependStrapiURL } from '../utils.jsx';

export const TeamMemberPhoto = ({ Name, Photo }) => {
  return (
    <Box
      sx={{
        py: 3,
        display: 'flex',
        justifyContent: 'center' // Center horizontally
      }}
    >
      <Avatar
        alt={Name}
        src={Photo.data?.attributes ? prependStrapiURL(Photo.data.attributes.url) : null}
        sx={{
          width: '160px',
          height: '160px',
          zIndex: 3
        }}
      />
    </Box>
  );
};
