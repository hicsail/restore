import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import { Box, Typography } from '@mui/material';

import { InfoPanelA } from '../components/InfoPanelA.jsx';

import { GET_ABOUT_MISSION } from '../gql.jsx';
import { prependStrapiURL } from '../utils.jsx';

function Strategies() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="infoPanelBTitle" sx={{ textAlign: 'center' }}>
          Our Strategies
        </Typography>
        <Typography variant="infoPanelBBody" sx={{ textAlign: 'center' }}>
          RESTORE uses various strategies to achieve these goals, including:
        </Typography>
        <Typography variant="infoPanelBBody">
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
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
      <Box sx={{ width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <img width="100%" src={prependStrapiURL('/uploads/ourstrategies_090926ae2a.png')} />
      </Box>
    </Box>
  );
}

export default function AboutMission() {
  const { loading, error, data } = useQuery(GET_ABOUT_MISSION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <InfoPanelA
        title="Our Mission: Providing Compassionate Psychiatric Care"
        subtitle="The REcovery from Stress and Trauma through Outpatient care, Research and Education (RESTORE) Center aims to improve access to high-quality services for PTSD across the health system and remove barriers to treatment for our patients."
        imageUrl="src/assets/imgplaceholder.png"
      />
      <Strategies />
      <ReactMarkdown>{data.aboutMission.data.attributes.Body}</ReactMarkdown>
    </>
  );
}
