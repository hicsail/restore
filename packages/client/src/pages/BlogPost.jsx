import { useQuery } from '@apollo/client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { prependStrapiURL, processMarkdownImageUri } from '../utils.jsx';
import { GET_BLOG_POST, GET_RECENT_BLOG_POSTS_EXCEPT } from '../gql.jsx';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id, blogTitle } = useParams();
  const { loading: postLoading, error: postErr, data: post } = useQuery(GET_BLOG_POST, { variables: { id } });
  const {
    loading: recentLoading,
    error: recentErr,
    data: recent
  } = useQuery(GET_RECENT_BLOG_POSTS_EXCEPT, { variables: { id, pageSize: 5 } });

  const [expanded, setExpanded] = useState(false);

  if (postLoading || recentLoading) return <p>Loading...</p>;
  if (postErr || recentErr) return <p>Error : {error.message}</p>;

  const handleExpand = (panel) => (_event) => {
    setExpanded(panel);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Button
            component={Link}
            to="/blog"
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
            sx={{ marginBottom: 2 }}
          >
            Back to Blog
          </Button>
          <Box
            component="img"
            src={prependStrapiURL(post.blogPost.data.attributes.CoverImage.data.attributes.url)}
            width="100%"
          />
          <h1>{post.blogPost.data.attributes.Title}</h1>
          <ReactMarkdown transformImageUri={processMarkdownImageUri}>
            {post.blogPost.data.attributes.Body}
          </ReactMarkdown>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Recent Posts
          </Typography>
          <hr />
          {recent.blogPosts.data.map(({ id, attributes }) => (
            <Accordion
              key={id}
              disableGutters
              expanded={expanded === id}
              // onMouseEnter={handleExpand(id)}
              // onMouseLeave={handleCollapse}
            >
              <AccordionSummary>
                <Box
                  component={Link}
                  to={`/blog/${id}/${attributes.Title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  sx={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography variant="h6" lineHeight={1.2} marginBottom={1}>
                    {attributes.Title}
                  </Typography>
                  <Typography variant="subtitle2">{new Date(attributes.DatetimePublished).toDateString()}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1"></Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
