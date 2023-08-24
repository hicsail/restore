import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useQuery } from '@apollo/client';

import { ThemeProvider } from '@mui/material/styles';
import { Box, Button, Card, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ReactMarkdown, { uriTransformer } from 'react-markdown';

import { theme } from './theme.jsx'
import { GET_ABOUT_MISSION,
         GET_TEAM_MEMBERS,
         GET_RESEARCH_AND_EVALUATIONS,
         GET_BLOG_POSTS
       } from './gql.jsx'


// This function is for taking image URLs from markdown content
// and prepending the Strapi URL where needed (i.e. in relative paths).
// It is meant to be composed with react-markdown's default uriTransformer,
// so it assumes that the url is already cleaned.
function prependStrapiURL(url) {
  const first = url.charAt(0)
  if (first === '/') {
    return import.meta.env.VITE_STRAPI_URL + url
  }
  return url
}
function processMarkdownImageUri(url) {
  return prependStrapiURL(uriTransformer(url))
}


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function NavTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="navigation tabs">
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Our Team" {...a11yProps(1)} />
          <Tab label="Testimonials" {...a11yProps(2)} />
          <Tab label="Research and Evaluation" {...a11yProps(3)} />
          <Tab label="Get Involved" {...a11yProps(4)} />
          <Tab label="Blog" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AboutMission />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TeamMemberGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UnderConstruction />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ResearchAndEvals />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <UnderConstruction />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <BlogPosts />
      </CustomTabPanel>
    </Box>
  );
}


function AboutMission() {
  const { loading, error, data } = useQuery(GET_ABOUT_MISSION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ReactMarkdown>{data.aboutMission.data.attributes.Body}</ReactMarkdown>
  )
}


function TeamMemberGrid() {
  return <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}><TeamMemberCards /></Box>
}

function TeamMemberCards() {
  const { loading, error, data } = useQuery(GET_TEAM_MEMBERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.teamMembers.data.map(({ id, attributes }) => (
    <Card key={id} className="teamMemberCard" sx={{ backgroundColor: 'blue.main', padding: '1rem', textAlign: 'center' }}>
      <img src={import.meta.env.VITE_STRAPI_URL + attributes.Photo.data.attributes.url} />
      <Typography variant="h5">{attributes.Name}</Typography>
      <Typography>{attributes.Titles}</Typography>
      <Typography>{attributes.Roles}</Typography>
      <Typography>{attributes.Languages}</Typography>
    </Card>
  ));
}

function ResearchAndEvals() {
  const { loading, error, data } = useQuery(GET_RESEARCH_AND_EVALUATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ReactMarkdown>{data.researchAndEvaluation.data.attributes.Body}</ReactMarkdown>
  )
}



function BlogPosts() {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.blogPosts.data.map(({ id, attributes }) => (
    <div
      key={id}
      style={{
        backgroundColor: theme.palette.purple.light,
        color: theme.palette.purple.contrastText,
        padding: '0.5rem 1rem',
        margin: '1rem auto',
        borderRadius: '1em' }}
    >
      <h3>{attributes.Title}</h3>
      <p>Published at: {attributes.DatetimePublished}</p>
      <hr />
      <ReactMarkdown transformImageUri={processMarkdownImageUri}>{attributes.Body}</ReactMarkdown>
      <br />
    </div>
  ));
}


function UnderConstruction() {
  const [count, setCount] = useState(0)

  return (
    <div style={{textAlign: 'center'}}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Under Construction...</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavTabs />
    </ThemeProvider>
  )
}

export default App
