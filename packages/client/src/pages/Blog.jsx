import { useQuery } from '@apollo/client';

import { GET_BLOG_POSTS_BY_CATEGORY } from '../gql.jsx';
import { useState } from 'react';
import { Box, Container, Grid, Pagination, Tab, Tabs } from '@mui/material';
import { Header } from '../components/Header.jsx';
import { BlogCard } from '../components/BlogCard.jsx';

import { theme } from '../theme.jsx';

function BlogBrowser() {
  const { loading, error, data, refetch } = useQuery(GET_BLOG_POSTS_BY_CATEGORY, {
    variables: { category: '', page: 1, pageSize: 9 }
  });
  const [tabValue, setTabValue] = useState(0);
  const blogCategories = {
    all: 'All',
    depression: 'Depression',
    anxiety: 'Anxiety',
    addiction: 'Addiction',
    bipolar: 'Bipolar'
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handleChangeTab = (_event, newValue) => {
    setTabValue(newValue);
    const newCategory = Object.values(blogCategories)[newValue];
    refetch({ category: newCategory === 'All' ? '' : newCategory });
  };

  const handlePageChange = (_event, page) => {
    refetch({ page });
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Tabs value={tabValue} onChange={handleChangeTab}>
          {Object.keys(blogCategories).map((category) => (
            <Tab key={category} label={blogCategories[category]} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ my: 5, mx: 2 }}>
        <span style={{ fontWeight: 'bold' }}>Latest</span>
        <h1 style={{ marginTop: 8 }}>Discover Our Blog Posts</h1>
        <p>Stay informed with our latest blog updates.</p>
      </Box>
      <Grid container rowSpacing={5} role="tabpanel">
        {data.blogPosts.data.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <BlogCard
              id={post.id}
              tag={post.attributes.Category}
              title={post.attributes.Title}
              imgSource={post.attributes.CoverImage.data?.attributes.url}
              author={post.attributes.Author}
              date={post.attributes.DatetimePublished}
            />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={10}>
        <Pagination
          count={Math.floor(data.blogPosts.meta.pagination.total / data.blogPosts.meta.pagination.pageSize) + 1}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
}

function BlogHeader() {
  return (
    <Header
      title="Multi-Level Interventions to Reduce the Burden of Trauma on the Health of Communities"
      subtitle="Improve Equitable Access. Promote Quality and Cultural Responsiveness of Care. Build Trust."
      bgColor={theme.palette.purple.dark}
    />
  );
}

export default function Blog() {
  return (
    <>
      <BlogHeader />
      <Container sx={{ margin: '1rem auto' }}>
        <BlogBrowser />
      </Container>
    </>
  );
}
