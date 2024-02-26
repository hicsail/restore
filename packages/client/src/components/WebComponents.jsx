import { Box, Container } from '@mui/material';
import { TeamCategory } from './TeamCategory.jsx';
import { Header } from './Header.jsx';

export const WebComponents = ({ type, data }) => {
  switch (type) {
    case 'ComponentHeaderHeader':
      return (
        <Header
          title={data.Title}
          subtitle={data.Subtitle}
          imageUrl={data.BackgroundImage.data.attributes.url}
          bgColor={data.BackgroundColorHexCode}
        />
      );
    case 'ComponentWebTeam':
      return (
        <Box display='flex'>
          <Container>
            <TeamCategory {...data.team_category.data.attributes} />
          </Container>
        </Box>
      );
    default:
      return null;
  }
};
