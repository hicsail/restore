import { Card, CardContent, Typography, Chip, Stack, CardActions, Button } from '@mui/material';
import { TeamMemberPhoto } from './TeamMemberPhoto.jsx';

export const TeamMember = ({ Name, Photo, Titles, Languages, LinkToCV, Roles }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <TeamMemberPhoto Photo={Photo} Name={Name} />
      <CardContent>
        <Typography variant="h5" component="h3" gutterBottom>
          {Name} {Titles}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {Roles}
        </Typography>
        {Languages && (
          <Stack direction="row" spacing={2}>
            {Languages.split(',').map((language) => (
              <Chip sx={{ fontStyle: 'italic', fontWeight: 'bold' }} key={language} label={language} />
            ))}
          </Stack>
        )}
      </CardContent>
      <CardActions>{LinkToCV && <Button size="small">View CV</Button>}</CardActions>
    </Card>
  );
};
