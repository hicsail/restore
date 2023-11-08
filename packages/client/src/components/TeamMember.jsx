import { Card, CardContent, Chip, Grid, Typography } from '@mui/material';
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
            <Grid container spacing={1}>
              {EBPs.split(',').map((EBP) => (
                <Grid item>
                  <Chip sx={{ fontStyle: 'italic', fontWeight: 'bold' }} key={EBP} label={EBP} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
        {Languages && (
          <>
            <Typography>
              <strong>Languages spoken:</strong>
            </Typography>
            <Grid container spacing={1}>
              {Languages.split(',').map((language) => (
                <Grid item>
                  <Chip sx={{ fontStyle: 'italic', fontWeight: 'bold' }} key={language} label={language} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </CardContent>
    </Card>
  );
};
