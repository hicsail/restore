import { Box, Container, Typography } from '@mui/material';
import { Header } from '../components/Header.jsx';
import { InfoPanelA } from '../components/InfoPanelA.jsx';
import { prependStrapiURL } from '../utils.jsx';
import { theme } from '../theme.jsx';
import { useQuery } from '@apollo/client';
import { GET_ABOUTPAGE_HEADER, GET_WHYOURWORK_IMG } from '../gql.jsx';

function Mission() {
  return (
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
  );
}

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

function WhyOurWorkIsImportant() {
  const { loading, error, data } = useQuery(GET_WHYOURWORK_IMG);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const imgdata = data.whyOurWorkIsImportant.data.attributes.Image.data;

  return (
    imgdata && (
      <Box
        component="img"
        alt={imgdata.attributes.alternativeText}
        src={prependStrapiURL(imgdata.attributes.url)}
        sx={{ display: 'block', margin: '2em auto' }}
      />
    )
  );
}

function AboutHeader() {
  const { data } = useQuery(GET_ABOUTPAGE_HEADER);
  if (!data?.aboutPageHeader.data?.attributes.Header) return;
  const { Title, Subtitle, BackgroundColorHexCode, BackgroundImage } = data.aboutPageHeader.data.attributes.Header;

  return (
    <Header
      title={Title}
      subtitle={Subtitle}
      imageUrl={BackgroundImage.data && prependStrapiURL(BackgroundImage.data.attributes.url)}
      bgColor={BackgroundColorHexCode}
    />
  );
}

export default function About() {
  return (
    <>
      <AboutHeader />
      <Container sx={{ margin: '1rem auto' }}>
        <Mission />
        <WhyOurWorkIsImportant />
        <Strategies />
      </Container>
    </>
  );
}
