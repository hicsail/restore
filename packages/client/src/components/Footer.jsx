import { useQuery } from '@apollo/client';
import { GET_LOGO_FULL_SVG } from '../gql';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  const { loading, error, data } = useQuery(GET_LOGO_FULL_SVG);
  const socialLinks = [
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/' },
    { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com/' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/' },
    { name: 'YouTube', icon: <YouTubeIcon />, url: 'https://www.youtube.com/' }
  ];

  if (loading) return <p>RESTORE</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Container sx={{ marginX: 'auto', marginTop: 8, display: 'flex' }}>
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
        <Box component="img" src="src/assets/bu-logo.webp" height={80} marginLeft={5} marginTop="auto" />
      </Container>
      <Box justifyContent="center" marginBottom={8} paddingX={8}>
        <Divider sx={{ marginY: 3 }} />
        <Box display="flex">
          <Typography variant="body2">© 2023 All rights reserved</Typography>
          <Typography variant="body2" sx={{ display: 'flex', gap: 5, marginLeft: 'auto' }}>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Cookies Settings</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
