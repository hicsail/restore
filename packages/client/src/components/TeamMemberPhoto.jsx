import { Avatar, Box } from '@mui/material';
import { prependStrapiURL } from '../utils.jsx';

export const TeamMemberPhoto = ({ Name, Photo, index }) => {
  const colors = ['purple', 'yellow', 'blue'];
  const selection = Math.floor(Math.random() * 3);
  const placement = Math.floor(Math.random() * 3);
  const firstColor = colors[selection];
  const secondColor = colors[(selection + 1) % 3];
  const thirdColor = colors[(selection + 2) % 3];

  return (
    <Box>
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
    </Box>
  );
};
