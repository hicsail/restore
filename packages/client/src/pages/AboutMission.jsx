import { Box, Typography } from '@mui/material';
import { InfoPanelA } from '../components/InfoPanelA.jsx';
import { prependStrapiURL } from '../utils.jsx';

function Strategies() {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center', gap: 2 }}>
      <Box sx={{ width: { xs: '100%', md: '60%' }, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="infoPanelBTitle" sx={{ textAlign: 'center' }}>
          Our Strategies
        </Typography>
        <Typography variant="infoPanelBBody" sx={{ textAlign: 'center' }}>
          RESTORE uses various strategies to achieve these goals, including:
        </Typography>
        <Typography variant="infoPanelBBody">
          <Box sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr', md: 'repeat(2, 1fr)' } }}>
            <p>Clinical training and consultation initiatives</p>
            <p>Expanding the capacity of the mental health workforce</p>
            <p>Offering web-delivered mental health applications</p>
            <p>Community health worker-supported services</p>
            <p>Tailoring treatments to fit usual care settings</p>
            <p>Cultural tailoring of treatments to enhance quality and fit with our patients</p>
            <p>Patient education and outreach to reduce mental health stigma and build trust</p>
            <p>Offering coping skills training to enhance readiness for intensive treatments</p>
            <p>Improving the efficiency of service delivery through measurement based care</p>
            <p>Partnering with the community through various advisory boards</p>
          </Box>
        </Typography>
      </Box>
      <Box sx={{ width: { xs: '60%', md: '40%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <img width="100%" src={prependStrapiURL('/uploads/ourstrategies_090926ae2a.png')} />
      </Box>
    </Box>
  );
}

export default function AboutMission() {
  return (
    <>
      <InfoPanelA
        title="Our Mission"
        subtitle={
          <p>
            The <strong>RE</strong>covery from <strong>S</strong>tress and <strong>T</strong>rauma through{' '}
            <strong>O</strong>utpatient care, <strong>R</strong>esearch and <strong>E</strong>ducation (
            <strong>RESTORE</strong>) Center aims to <strong>improve access</strong> to high-quality services for PTSD
            across the health system and <strong>remove barriers</strong> to treatment for our patients.
          </p>
        }
        imageUrl={prependStrapiURL('/uploads/ourmission_95ef74d5f3.png')}
      />
      <Strategies />
    </>
  );
}
