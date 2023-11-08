import { Card, CardContent, Typography, Chip, Stack, CardActions, Button } from '@mui/material';
import { TeamMemberPhoto } from './TeamMemberPhoto.jsx';

export const TeamMember = ({ Name, Photo, Credentials, Pronouns, Languages, Roles, Bio, Interests, EBPs }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <TeamMemberPhoto Photo={Photo} Name={Name} />
      <CardContent>
        <Typography variant="h5" component="h3" gutterBottom>
          <strong>{Name}</strong>
          {Credentials && `, ${Credentials}`} {Pronouns && `(${Pronouns})`}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Role/Position: </strong>
          {Roles}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Bio: </strong>
          {Bio}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Research/Clinical Interests: </strong>
          {Interests}
        </Typography>
        {EBPs && (
          <>
            <Typography>
              <strong>EBPs for PTSD trained in:</strong>
            </Typography>
            <Stack direction="row" spacing={2}>
              {EBPs.split(',').map((EBP) => (
                <Chip sx={{ fontStyle: 'italic', fontWeight: 'bold' }} key={EBP} label={EBP} />
              ))}
            </Stack>
          </>
        )}
        {Languages && (
          <>
            <Typography>
              <strong>Languages spoken:</strong>
            </Typography>
            <Stack direction="row" spacing={2}>
              {Languages.split(',').map((language) => (
                <Chip sx={{ fontStyle: 'italic', fontWeight: 'bold' }} key={language} label={language} />
              ))}
            </Stack>
          </>
        )}
      </CardContent>
    </Card>
  );
};
