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
        {team_members?.data?.map((member, index) => (
          <Grid item xs={6} sm={3} md={3} key={member.id}>
            <TeamMember index={index} {...member.attributes} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
