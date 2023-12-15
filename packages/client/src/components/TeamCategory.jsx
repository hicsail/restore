import { Box, Grid, Typography } from '@mui/material';
import { TeamMember } from './TeamMember.jsx';

export const TeamCategory = ({ TeamCategoryName, Description, team_members }) => {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        {TeamCategoryName}
      </Typography>
      {Description && (
        <Typography variant="body1" gutterBottom>
          {Description}
        </Typography>
      )}
      <Grid container spacing={2}>
        {team_members?.data
          ?.toSorted((a, b) => a.attributes.Order - b.attributes.Order)
          .map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <TeamMember {...member.attributes} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
