import { useQuery } from '@apollo/client';
import { GET_LOGO_FULL_SVG } from '../gql';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Carousel } from './Carousel';
import { useEffect, useRef, useState } from 'react';

export const Footer = () => {
  const { loading, error, data } = useQuery(GET_LOGO_FULL_SVG);
  const componentRef = useRef(null);
  const [componentWidth, setComponentWidth] = useState(0);
  const [displayedLogos, setDisplayedLogos] = useState(Math.floor((componentWidth - 100) / (200 + 20)));

  const socialLinks = [
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/' },
    { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com/' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/' },
    { name: 'YouTube', icon: <YouTubeIcon />, url: 'https://www.youtube.com/' }
  ];
  const logos = [
    {
      src: 'src/assets/bu-logo.webp',
      url: 'https://www.bu.edu/'
    },
    {
      src: 'src/assets/bmc-logo.png',
      url: 'https://www.bmc.org/'
    },
    {
      src: 'src/assets/nimh-logo.png',
      url: 'https://www.nimh.nih.gov/'
    },
    {
      src: 'src/assets/samhsa-logo.png',
      url: 'https://www.samhsa.gov/'
    },
    {
      src: 'src/assets/roots-and-wings-foundation-logo.png',
      url: 'https://www.rootswings.org/'
    },
    {
      src: 'src/assets/bcbs-ma-logo.jpeg',
      url: 'https://www.bluecrossma.org/'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (componentRef.current) {
        setComponentWidth(componentRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [data]);

  useEffect(() => {
    setDisplayedLogos(Math.floor((componentWidth - 100) / (200 + 20)));
  }, [componentWidth]);

  if (loading) return <p>RESTORE</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Box>
      <Carousel logos={logos} displayCount={displayedLogos > 0 ? displayedLogos : 1} />
      <Container display="flex" sx={{ marginX: 'auto', paddingX: { sm: 6, xs: 3 } }} ref={componentRef}>
        <Box>
          <Box
            component="img"
            src={import.meta.env.VITE_STRAPI_URL + data.logoFullSvg.data.attributes.LogoFullSVG.data.attributes.url}
            sx={{ height: 48, marginBottom: 2 }}
          />
          <Box marginBottom={2}>
            <Typography variant="body2">
              <b>Address:</b>
              <br />
              One Boston Medical Center Place
              <br />
              Boston, MA 02118
              <br />
              <b>Contact:</b>
              <br />
              <Link to="tel:6174142340">(617) 414-2340</Link>
              <br />
              <Link to="mailto:restore@bmc.org">restore@bmc.org</Link>
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {socialLinks.map((socialLink) => (
              <Grid item key={socialLink.name}>
                <Link to={socialLink.url}>{socialLink.icon}</Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Box display="flex" flexDirection="column" sx={{ marginBottom: 8 }}>
        <Divider sx={{ alignSelf: 'center', marginY: 3, width: '90%' }} />
        <Box
          display="flex"
          width="90%"
          sx={{
            flexDirection: { sm: 'row', xs: 'column-reverse' },
            alignSelf: { sm: 'center', xs: 'start' },
            paddingX: { sm: 0, xs: 3 }
          }}
        >
          <Typography variant="body1">© 2023 All rights reserved</Typography>
          <Typography
            variant="body1"
            display="flex"
            sx={{
              flexDirection: { sm: 'row', xs: 'column' },
              gap: { sm: 5, xs: 2 },
              marginLeft: { sm: 'auto', xs: 0 },
              marginBottom: { sm: 0, xs: 2 }
            }}
          >
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Cookies Settings</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
