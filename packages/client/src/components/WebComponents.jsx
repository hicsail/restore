import { Box, Container } from '@mui/material';
import { TeamCategory } from './TeamCategory.jsx';
import { Header } from './Header.jsx';
import { Markdown } from './Markdown.jsx';
import { WebCardGrid } from './WebCardGrid.jsx';

export const WebComponents = ({ type, data }) => {
  switch (type) {
    case 'ComponentWebCardGrid':
      return (
        <Box display="flex">
          <Container>
            <WebCardGrid cards={data.items} />;
          </Container>
        </Box>
      );
    case 'ComponentWebHeader':
      return (
        <Header
          title={data.Title}
          subtitle={data.Subtitle}
          imageUrl={data.BackgroundImage.data?.attributes.url}
          bgColor={data.BackgroundColorHexCode}
        />
      );
    case 'ComponentWebTeam':
      return (
        <Box display="flex">
          <Container>
            <TeamCategory {...data.team_category.data.attributes} />
          </Container>
        </Box>
      );
    case 'ComponentWebText':
      return (
        <Box display="flex">
          <Container>
            <Markdown {...data} />
          </Container>
        </Box>
      );
    default:
      return null;
  }
};
