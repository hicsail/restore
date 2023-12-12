import { Box, Typography } from '@mui/material';
import { InfoPanelA } from '../components/InfoPanelA.jsx';
import { prependStrapiURL } from '../utils.jsx';
import { theme } from '../theme.jsx';

function Strategies() {
  return (
    <InfoPanelA
      id="our-strategies"
      title="Our Strategies"
      subtitle={
        <Typography>
          RESTORE uses various strategies to achieve these goals, including:
          {/* Override InfoPanelA's responsive textAlign styling in the specific case of <ul>;
              otherwise the center-aligned bullet list looks pretty awful */}
          <ul style={{ textAlign: 'left' }}>
            <li>Clinical training and consultation initiatives</li>
            <li>Offering web-delivered mental health applications</li>
            <li>Tailoring treatments to fit usual care settings</li>
            <li>Patient education and outreach to reduce mental health stigma and build trust</li>
            <li>Expanding the capacity of the mental health workforce</li>
            <li>Community health worker-supported services</li>
            <li>Cultural tailoring of treatments to increase quality and fit with our patients</li>
            <li>Offering coping skills training to increase readiness for intensive treatments</li>
            <li>Improving the patient experience through measurement-based care</li>
            <li>Partnering with the community through various advisory boards</li>
          </ul>
        </Typography>
      }
    />
  );
}

export default function AboutMission() {
  return (
    <>
      <InfoPanelA
        id="our-mission"
        title="Our Mission"
        subtitle={
          <>
            <p>
              RESTORE stands for: <strong>RE</strong>covery from <strong>S</strong>tress and <strong>T</strong>rauma
              through <strong>O</strong>utpatient care, <strong>R</strong>esearch and <strong>E</strong>ducation.
            </p>
            <p>The RESTORE Center aims to</p>
            {/* Override InfoPanelA's responsive textAlign styling in the specific case of <ul>;
                otherwise the center-aligned bullet list looks pretty awful */}
            <ul style={{ textAlign: 'left' }}>
              <li>
                <span style={{ color: theme.palette.purple.dark }}>
                  <strong>improve access</strong>
                </span>{' '}
                to high-quality services for PTSD across the health system
              </li>
              <li>
                <span style={{ color: theme.palette.purple.dark }}>
                  <strong>remove barriers</strong>
                </span>{' '}
                to treatment for our patients.
              </li>
            </ul>
          </>
        }
        imageUrl={prependStrapiURL('/uploads/ourmission_95ef74d5f3.png')}
      />
      <Strategies />
    </>
  );
}
