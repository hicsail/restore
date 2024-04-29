import { Container, Stack, Typography } from '@mui/material';
import { UpcomingOngoing } from '../TreatmentsServices.jsx';

export const Providers = () => (
  <Container>
    <Typography variant="h3">Treatment & Services</Typography>
    <Typography variant="h4" color="primary">
      For Providers
    </Typography>
    <Typography variant="infoPanelBBody">
      <p>
        RESTORE provides facilitation—an interactive problem-solving approach that supports organizations in applying
        evidence-based practices in routine care.
      </p>
      <p>RESTORE’s selected facilitation strategies:</p>
      <ul>
        <li>Training and consultation initiatives</li>
        <li>Consultation to clinical and community partners on implementation planning</li>
        <li>Organize local change agents in leadership and clinician expertise</li>
        <li>
          Build reciprocal and participatory relationship with clinician teams to foster a shared vision and priorities
        </li>
        <li>
          Promote structural change to support implementation with screening, identification, and referral pathways
          across the system
        </li>
        <li>Convene community, patient, provider, and external advisory boards on PTSD and oppression-based stress</li>
        <li>Support data-driven intervention adaptation, including cultural adaptation</li>
        <li>Administrative and technical support through imbedded online flowsheets and templates</li>
      </ul>
    </Typography>
    <Stack gap={3}>
      <Typography variant="h4" color="primary">
        Commitment to Health Equity
      </Typography>
      <Typography>
        We believe that access to high quality and culturally responsive care is a fundamental part of achieving health
        equity.
      </Typography>
      <Typography>Four implementation science principles guide our work in advancing health equity.</Typography>
      <Typography>
        <ol>
          <li>Racism is a fundamental driver of health inequities</li>
          <li>Equitable healthcare requires active engagement of community members</li>
          <li>Equitable healthcare requires multisector partnerships</li>
          <li>Context is central to healthcare equity</li>
        </ol>
      </Typography>
    </Stack>
    <UpcomingOngoing />
  </Container>
);
