import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography
} from '@mui/material';
import { TeamMemberPhoto } from './TeamMemberPhoto.jsx';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const TeamMember = ({ Name, Photo, Credentials, Pronouns, Languages, Roles, Bio, Interests, EBPs }) => {
  return (
    <Card variant="outlined" sx={{ height: '100%', border: 1, borderRadius: '0 20px 20px 20px' }}>
      <TeamMemberPhoto Photo={Photo} Name={Name} />
      <CardContent>
        <Typography variant="h5" component="h3" gutterBottom>
          <strong>{Name}</strong>
          {Credentials && `, ${Credentials}`} {Pronouns && `(${Pronouns})`}
        </Typography>
        {Roles && (
          <Typography variant="subtitle1" gutterBottom>
            <strong>Role/Position: </strong>
            {Roles}
          </Typography>
        )}
        {Bio && (
          <Accordion disableGutters elevation={0} square>
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <strong>Bio: </strong>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" gutterBottom>
                {Bio}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
        {Interests && (
          <Typography variant="body1" gutterBottom>
            <strong>Research/Clinical Interests: </strong>
            {Interests}
          </Typography>
        )}
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
