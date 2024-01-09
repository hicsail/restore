import { NavLink } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';

import { Header } from '../components/Header.jsx';
import { InfoPanelA } from '../components/InfoPanelA.jsx';
import { SectionedHeader } from '../components/SectionedHeader.jsx';
import { CardGrid } from '../components/CardGrid.jsx';
import { BlogCard } from '../components/BlogCard.jsx';

import { useQuery } from '@apollo/client';
import {
  GET_HOMEPAGE_HEADER,
  GET_HOMEPAGE_CARDGRID,
  GET_HOMEPAGE_INFOPANEL_TOP,
  GET_HOMEPAGE_INFOPANEL_BOTTOM,
  GET_RECENT_BLOG_POSTS
} from '../gql.jsx';
import { prependStrapiURL } from '../utils.jsx';

import { theme } from '../theme.jsx';

function HomepageInfoPanelTop() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_INFOPANEL_TOP);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { Title, Subtitle, Image, Icon, ButtonText, ButtonLink } = data.homePageInfoPanelTop.data.attributes.InfoPanelA;
  const imgUrl = import.meta.env.VITE_STRAPI_URL + Image.data.attributes.url;
  const imgAlt = Image.data.attributes.alternativeText;
  const iconUrl = import.meta.env.VITE_STRAPI_URL + Icon.data.attributes.url;
  const iconAlt = Icon.data.attributes.alternativeText;

  return (
    <InfoPanelA
      title={Title}
      subtitle={Subtitle}
      imageUrl={imgUrl}
      imageAlt={imgAlt}
      iconUrl={iconUrl}
      iconAlt={iconAlt}
    />
  );
}

function HomepageCardGrid() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_CARDGRID);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <SectionedHeader id="what-we-do" title="What We Do" />
      <CardGrid cards={data.homePageCardGrids.data} />
    </>
  );
}

function HomepageInfoPanelBottom() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_INFOPANEL_BOTTOM);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { Title, Subtitle, Image, Icon, ButtonText, ButtonLink } =
    data.homePageInfoPanelBottom.data.attributes.InfoPanelA;
  const imgUrl = import.meta.env.VITE_STRAPI_URL + Image.data.attributes.url;
  const imgAlt = Image.data.attributes.alternativeText;

  return (
    <InfoPanelA
      title={Title}
      subtitle={Subtitle}
      imageUrl={imgUrl}
      imageAlt={imgAlt}
      buttonText={ButtonText}
      buttonLink={ButtonLink}
    />
  );
}

function HomepageBlogPreview() {
  const { loading, error, data } = useQuery(GET_RECENT_BLOG_POSTS, {
    variables: { pageSize: 3 }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="infoPanelATitle">Our Blog</Typography>
      <Box sx={{ display: 'flex' }}>
        {data.blogPosts.data.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            tag={post.attributes.Category}
            title={post.attributes.Title}
            imgSource={post.attributes.CoverImage.data?.attributes.url}
            author={post.attributes.Author}
            date={post.attributes.DatetimePublished}
          />
        ))}
      </Box>
      <Button component={NavLink} to="/blog" variant="outlined" sx={{ color: 'black', borderColor: 'black' }}>
        View all
      </Button>
    </Box>
  );
}

function HomeHeader() {
  const { data } = useQuery(GET_HOMEPAGE_HEADER);
  if (!data?.homePageHeader.data?.attributes.Header) return;
  const { Title, Subtitle, BackgroundColorHexCode, BackgroundImage } = data.homePageHeader.data.attributes.Header;

  return (
    <Header
      title={Title}
      subtitle={Subtitle}
      imageUrl={BackgroundImage.data && prependStrapiURL(BackgroundImage.data.attributes.url)}
      bgColor={BackgroundColorHexCode}
    />
  );
}

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Container sx={{ margin: '1rem auto' }}>
        <HomepageInfoPanelTop />
        <HomepageCardGrid />
        <HomepageInfoPanelBottom />
        <HomepageBlogPreview />
      </Container>
    </>
  );
}
