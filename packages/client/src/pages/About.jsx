import { Card, CardActionArea, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import { Header } from '../components/Header.jsx';
import { InfoPanelA } from '../components/InfoPanelA.jsx';
import { prependStrapiURL } from '../utils.jsx';
import { theme } from '../theme.jsx';
import { useQuery } from '@apollo/client';
import { GET_ABOUTPAGE_HEADER, GET_WHYOURWORK_IMG } from '../gql.jsx';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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

function AboutHeader() {
  const { data } = useQuery(GET_ABOUTPAGE_HEADER);
  if (!data?.aboutPageHeader.data?.attributes.Header) return;
  const { Title, Subtitle, BackgroundColorHexCode, BackgroundImage } = data.aboutPageHeader.data.attributes.Header;

  return (
    <Header
      title={Title}
      subtitle={Subtitle}
      imageUrl={BackgroundImage.data && BackgroundImage.data.attributes.url}
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
        <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
          Why Our Work is Important
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 4, mb: 2 }}>
          RESTORE has identified several barriers to care for patients with PTSD. Our work is important because we help
          to solve these various barriers.
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={6} md={3}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex', //so that action area stretches over whole card
                border: 1,
                borderRadius: '0 20px 20px 20px'
              }}
            >
              <CardContent>
                <Typography variant="h6">Patient Barriers</Typography>
                <ul>
                  <li>Stigma of Mental Illness</li>
                  <li>Language Barriers</li>
                  <li>Mistrust of Health Systems</li>
                  <li>Barriers to transportation or appointments not offered via Telehealth</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={3}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex', //so that action area stretches over whole card
                border: 1,
                borderRadius: '0 20px 20px 20px'
              }}
            >
              <CardContent>
                <Typography variant="h6">Provider Barriers</Typography>
                <ul>
                  <li>Not having sufficient training in PTDS Treatment</li>
                  <li>Desire to use CBT as "toolkit"</li>
                  <li>Personal beliefs about trauma recover treatment and Evidence-based therapies</li>
                  <li>Mistrust of Research</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={3}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex', //so that action area stretches over whole card
                border: 1,
                borderRadius: '0 20px 20px 20px'
              }}
            >
              <CardContent>
                <Typography variant="h6">System</Typography>
                <ul>
                  <li>Unrealistic productivity expectations of health-system workers</li>
                  <li>Insufficient time for Providers to receive training and consultation</li>
                  <li>Turnover, burnout, and staff shortages</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={3}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex', //so that action area stretches over whole card
                border: 1,
                borderRadius: '0 20px 20px 20px'
              }}
            >
              <CardContent>
                <Typography variant="h6">Manual</Typography>
                <ul>
                  <li>Therapy training manuals are too complex and "academic"</li>
                  <li>
                    Education of Evidence-based Therapies and example cases or scenarios do not resonate with Providers
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Strategies />
      </Container>
    </>
  );
}
