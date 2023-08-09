import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useQuery, gql } from '@apollo/client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Card, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

let theme = createTheme({
  palette: {
    // Since we have a tricolor palette, and MUI's default palette system is bicolor,
    // let's use named custom colors instead of adding a custom 'tertiary' to the built-in
    // 'primary'/'secondary'. This will avoid surprises down the line when changing props
    // on MUI components (for example, a developer might try to change indicatorColor
    // or textColor on MUI <Tabs> from 'secondary' to 'tertiary', which will not work).
    purple: {
      main: '#A888C7',
    },
    yellow: {
      main: '#FFD884',
    },
    blue: {
      main: '#78CEE9',
    },
    gray: {
      main: '#0009',
    },
    black: {
      main: '#000000',
    },
  },
});

// Compose theme in two steps so we can style components using named colors.
theme = createTheme(theme, {
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTabs-indicator': {
            backgroundColor: 'purple',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'gray',
          '&.Mui-selected': {
            color: 'black',
          },
        },
      },
    },
  },
});


const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers {
    teamMembers {
      data {
        id
        attributes {
          Name
          Titles
          Roles
          Languages
          LinkToCV
          Photo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GET_RESEARCH_AND_EVALUATIONS = gql`
  query GetResearchAndEvaluations {
    researchAndEvaluation {
      data {
        attributes {
          Body
        }
      }
    }
}
`;
const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    blogPosts {
      data {
        id
        attributes {
          Title
          DatetimePublished
          Body
        }
      }
    }
  }
`;

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
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        About
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TeamMemberGrid />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Testimonials
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ResearchAndEvals />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Get Involved
      </CustomTabPanel>
    </Box>
  );
}

function TeamMemberGrid() {
  return <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}><TeamMemberCards /></Box>
}

function TeamMemberCards() {
  const { loading, error, data } = useQuery(GET_TEAM_MEMBERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.teamMembers.data.map(({ id, attributes }) => (
    <Card key={id} className="teamMemberCard" sx={{ backgroundColor: 'blue.main' }}>
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
    <div key={id} className="blogpost" style={{backgroundColor: theme.palette.purple.main, color: theme.palette.black.main }}>
      <h3>{attributes.Title}</h3>
      <b>Published at: {attributes.DatetimePublished}</b>
      <ReactMarkdown>{attributes.Body}</ReactMarkdown>
      <br />
    </div>
  ));
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <><ThemeProvider theme={theme}>
      <NavTabs />
      <BlogPosts />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} style={{backgroundColor: theme.palette.yellow.main}}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider></>
  )
}

export default App
