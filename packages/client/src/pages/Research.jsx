import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { SectionedHeader } from '../components/SectionedHeader.jsx';

import { GET_CURRENT_STUDIES, GET_RESEARCH_AND_EVALUATIONS } from '../gql.jsx';
import { prependStrapiURL } from '../utils';

function CurrentStudies() {
  const { loading, error, data } = useQuery(GET_CURRENT_STUDIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <SectionedHeader title="Current Studies" />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
        {data.currentStudiess.data
          .filter(() => true)
          .sort((a, b) => a.attributes.Order - b.attributes.Order)
          .map((a) => (
            <Card key={a.id} sx={{ borderRadius: 4 }}>
              <CardMedia
                image={
                  a.attributes.Image.data.attributes.url
                    ? prependStrapiURL(a.attributes.Image.data.attributes.url)
                    : '/src/assets/imgplaceholder.png'
                }
                sx={{ height: 300 }}
              />
              <CardContent>
                <Typography fontWeight="bold">{a.attributes.Title}</Typography>
                {a.attributes.Description && (
                  <Typography variant="p">
                    <ReactMarkdown>{a.attributes.Description}</ReactMarkdown>
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
      </Box>
    </>
  );
}

export default function ResearchAndEvals() {
  const { loading, error, data } = useQuery(GET_RESEARCH_AND_EVALUATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <CurrentStudies />
      <ReactMarkdown>{data.researchAndEvaluation.data.attributes.Body}</ReactMarkdown>
    </>
  );
}
